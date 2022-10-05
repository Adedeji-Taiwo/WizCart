import React, {useEffect, useRef} from 'react';
import AdminSideBar from '../../../../components/adminSideBar/AdminSideBar'
import {AiOutlineSearch} from 'react-icons/ai'
import { BiCategory } from 'react-icons/bi';
import {toast} from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { Oval } from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';
import { createCategory, getCategories, removeCategory } from '../../../../services/category';
import { Link } from 'react-router-dom';
import edit from '../../../../assets/adminCategory/edit.png';
import trash from '../../../../assets/adminCategory/trash.png';
import {
    CategoryWrapper,
    Section,
    CategoryList,
    Form,
    Filter,
    FilterSection
  } from './style';


const CategoryCreate = () => {
    const heightRef = useRef();
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {loading, categories, filter} = useSelector(state => state.addCategory);
    const {userInfo} = useSelector(state => state.userLogin);
    useEffect(() => {
        loadCategories();
    }, []);

   useEffect(() => {
        categories.length > 2 ? heightRef.current.style.height = 'auto' : heightRef.current.style.height = 'calc(100vh)';
    }, [categories])

    const loadCategories = () => {
        getCategories().then((res) => {
            dispatch({
                type: "LOAD_CATEGORY",
                payload: res.data,
            });
        })
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        let newCategory = e.target.category.value;
        
        dispatch({type: "ADD_CATEGORY_REQUEST", payload: categories});

        if(!newCategory) {
            toast.error(t('Category name is required'));
            setTimeout(() =>  dispatch({type: "ADD_CATEGORY_FAIL", payload: categories}), 6000);
            return;
        }

        if (newCategory.length < 2) {
            toast.error(t('Category name must be at least 6 characters long'));
            setTimeout(() =>  dispatch({type: "ADD_CATEGORY_FAIL", payload: categories}), 6000);
            return;
        }

        createCategory({ name: `${newCategory[0].toUpperCase()}${newCategory.slice(1)}` }, userInfo.token)
            .then((res) => {
                dispatch({ type: "ADD_CATEGORY_SUCCESS", payload: categories });
                toast.success(`${res.data.name} is created`);
                e.target.category.value = '';
                loadCategories();
            })
            .catch((error) => {
                setTimeout(() =>  dispatch({type: "ADD_CATEGORY_FAIL", payload: categories}), 6000);
                if (error.response.status === 400) {
                toast.error(error.response.data);
                }
            });        
    }

   
    const handleDelete = (slug) => {
        if (window.confirm(t(`Delete category: ${slug}?`))) {
            dispatch({type: "DELETE_CATEGORY_REQUEST"});
            removeCategory(slug, userInfo.token)
              .then((res) => {
                dispatch({type: "DELETE_CATEGORY_SUCCESS"});
                toast.success(`${res.data.name} deleted`);
                loadCategories();
              })
              .catch((error) => {
                setTimeout(() =>  dispatch({type: "DELETE_CATEGORY_FAIL"}), 6000);
                if (error.response.status === 400) {
                  toast.error(error.response.data);
                }
              });
          }
    }

      //filtering function
      const filteredCategories = categories
      .filter(category => (category.name.toLowerCase()).includes(filter.toLowerCase()));


    const handleSearchChange = (e) => {
      e.preventDefault();

      dispatch({
        type: 'FILTER_CATEGORY',
        payload: e.target.value.toLowerCase(),
        data: categories
      })


    };
  

  
 

  return (
    <>
    <AdminSideBar />
    <CategoryWrapper ref={heightRef}>
    <Section>
        <Form onSubmit={handleSubmit} fadeText={loading}>
            <h3>{t('Add Category')}</h3>
          <div>
            <span><BiCategory /></span>
            <input 
                type="text"
                name="category" 
                placeholder={`${t("Enter new category")}...`}
                autoFocus
            />
          </div>

          <div>
            <input type="submit" name="addCategory" value={t("Save")} id="submit" />
            {loading && (<span className='spinner'>
                <Oval
                    height={25}
                    width={25}
                    color='hsl(0, 0%, 83%)'
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#fff"
                    strokeWidth={7}
                    strokeWidthSecondary={7}
                    />
            </span>)}
          </div>
        </Form>
    </Section>

    <FilterSection>
    <Filter>
        <div>
        <span><AiOutlineSearch /></span>
        <input 
                type="search"
                value={filter}
                onChange={handleSearchChange}
                placeholder={`${t("Filter")}...`}
            />
        </div>
    </Filter>
    </FilterSection>

    <CategoryList>
      
    {filteredCategories.map(({_id, name, slug}) => (
            <p key={_id}>
                <span>{name}</span>
                <span className='icons'>
                   <Link to={`/admin/category/${slug}`}><img src={edit} alt="edit" /></Link>
                   <img src={trash} alt="delete" onClick={() => handleDelete(slug)}/>
                </span>
            </p>
    ))}
    </CategoryList>
    </CategoryWrapper>
    </>
  )
}

export default CategoryCreate;



