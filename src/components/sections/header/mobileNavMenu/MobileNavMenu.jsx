import React, { useContext } from 'react'
import { Gb, Fr, Es } from 'react-flags-select';
import { useTranslation } from 'react-i18next'
import { MenuContext } from '../../../../context/MenuContext';
import { FaTimes } from 'react-icons/fa'
import { facebook, twitter, instagram, linkedin } from '../../../../assets/social-links';
import { MdOutlineAdd, MdOutlineRemove } from 'react-icons/md';
import { AiOutlineCaretLeft, AiOutlineCaretDown } from 'react-icons/ai'
import { 
    MobileNavigationMenu,
    MenuTop,
    MobileMenuCategoryList,
    MenuCategory,
    MenuTitle,
    AccordionMenu,
    SubMenuCategoryList,
    SubMenuCategory,
    MenuBottom,
    MenuSocialContainer
 } from './style';


const MobileNavMenu = () => {
    const { isMenuOpen, closeMenu, toggleAccordion, isAccordionOpen, accordionClick } = useContext(MenuContext);
    const { t } = useTranslation(); 


    const handleLang  = (flag) => {

      const baseUrl = process.env.NODE_ENV === 'development' 
      ? import.meta.env.VITE_LOCAL_BASE_URL
      : import.meta.env.VITE_HOST_BASE_URL || 'https://wizcart.netlify.app/';
      
      window.location.replace(baseUrl + "?lng=" + flag);
  }

  return (
    <MobileNavigationMenu active={isMenuOpen}>

    <MenuTop>
      <h2>{t("Menu")}</h2>
      <button onClick={closeMenu}>
        <FaTimes />
      </button>
    </MenuTop>

    <MobileMenuCategoryList>

      <MenuCategory>
        <MenuTitle>{t("Home")}</MenuTitle>
      </MenuCategory>

      <MenuCategory>
        <AccordionMenu onClick={() => toggleAccordion(1)}>
          <MenuTitle>Marks & Spencer</MenuTitle>

          <div>
            {isAccordionOpen && accordionClick === 1 ? (
               <MdOutlineRemove  className="remove-icon" title={t("close")} />
            ) : (
              <MdOutlineAdd className="add-icon" title={t("open")} />
            )}         
          </div>
        </AccordionMenu>
     
          <SubMenuCategoryList toggle={isAccordionOpen}>
            {accordionClick === 1 && (
              <>
              <SubMenuCategory>
                <a href="#">{t("Women's")}</a>
              </SubMenuCategory>

              <SubMenuCategory>
                <a href="#">{t("Men's")}</a>
              </SubMenuCategory>

              <SubMenuCategory>
                <a href="#">{t("Kids'")}</a>
              </SubMenuCategory>

              <SubMenuCategory>
                <a href="#">{t("Beauty")}</a>
              </SubMenuCategory>
            </>
            )}
        </SubMenuCategoryList>

      </MenuCategory>

      <MenuCategory>

        <AccordionMenu onClick={() => toggleAccordion(2)}>
          <MenuTitle>Harry Potter's</MenuTitle>

          <div>
            {isAccordionOpen && accordionClick === 2 ? (
               <MdOutlineRemove  className="remove-icon" title={t("close")} />
            ) : (
              <MdOutlineAdd className="add-icon" title={t("open")} />
            )}         
          </div>
        </AccordionMenu>

          <SubMenuCategoryList toggle={isAccordionOpen}>
            {accordionClick === 2 && (
              <>
              <SubMenuCategory>
                  <a href="#">{t("Wands")}</a>
                </SubMenuCategory>

                <SubMenuCategory>
                  <a href="#">{t("Trunks")}</a>
                </SubMenuCategory>

                <SubMenuCategory>
                  <a href="#">{t("Clothing")}</a>
                </SubMenuCategory>

                <SubMenuCategory>
                  <a href="#">{t("Sweets")} &#38; {t("Treats")}</a>
                </SubMenuCategory>
              </>
              )}
        </SubMenuCategoryList>
      

      </MenuCategory>

      <MenuCategory>

        <AccordionMenu onClick={() => toggleAccordion(3)}>
          <MenuTitle>James Smith & Sons</MenuTitle>

          <div>
            {isAccordionOpen && accordionClick === 3 ? (
               <MdOutlineRemove  className="remove-icon" title={t("close")} />
            ) : (
              <MdOutlineAdd className="add-icon" title={t("open")} />
            )}         
          </div>
        </AccordionMenu>

       
          <SubMenuCategoryList toggle={isAccordionOpen}>
          {accordionClick === 3 && (
            <>
            <SubMenuCategory>
              <a href="#">{t("Folding Umbrellas")}</a>
            </SubMenuCategory>

            <SubMenuCategory>
              <a href="#">{t("Sun Umbrellas")}</a>
            </SubMenuCategory>

            <SubMenuCategory>
              <a href="#">{t("Walking Sticks")}</a>
            </SubMenuCategory>

            <SubMenuCategory>
              <a href="#">{t("Seat Sticks")}</a>
            </SubMenuCategory>
          </>
            )}
        </SubMenuCategoryList>

      </MenuCategory>

      <MenuCategory>

        <AccordionMenu onClick={() => toggleAccordion(4)}>
          <MenuTitle>Twinings</MenuTitle>

          <div>
            {isAccordionOpen && accordionClick === 4 ? (
               <MdOutlineRemove  className="remove-icon" title={t("close")} />
            ) : (
              <MdOutlineAdd className="add-icon" title={t("open")} />
            )}         
          </div>
        </AccordionMenu>

         <SubMenuCategoryList toggle={isAccordionOpen}>
            {accordionClick === 4 && (
              <>
                <SubMenuCategory>
                <a href="#">{t("Tea")}</a>
                </SubMenuCategory>

                <SubMenuCategory>
                  <a href="#">{t("Wellbeing Drinks")}</a>
                </SubMenuCategory>

                <SubMenuCategory>
                  <a href="#">{t("Teaware")}</a>
                </SubMenuCategory>

                <SubMenuCategory>
                  <a href="#">{t("Treats")}</a>
                </SubMenuCategory>
              </>
            )}
       </SubMenuCategoryList>

      </MenuCategory>


    </MobileMenuCategoryList>



    <MenuBottom>
      <ul>
        <MenuCategory>
          <AccordionMenu onClick={() => toggleAccordion(5)}>
            <p className="menu-title">{t("Language")}</p>
            {isAccordionOpen && accordionClick === 5 ? (
               <AiOutlineCaretDown />
            ) : (
              <AiOutlineCaretLeft />
            )}
          </AccordionMenu>

              <SubMenuCategoryList toggle={isAccordionOpen}>
                {accordionClick === 5 && (
                    <>
                      <SubMenuCategory>
                      <button onClick={() => handleLang('fr')} title={t('French')}><Fr /></button>
                    </SubMenuCategory>
        
                    <SubMenuCategory>
                      <button onClick={() => handleLang('es')} title={t('Spanish')}><Es /></button>
                    </SubMenuCategory>
        
                    <SubMenuCategory>
                      <button onClick={() => handleLang('en')} title={t('English')}><Gb /></button>
                    </SubMenuCategory>
                    </>
                )}
            </SubMenuCategoryList>
        </MenuCategory>
      </ul>

      <MenuSocialContainer>

        <li>
          <a href="#">
            <img src={facebook} alt="facebook" title='facebook' />
          </a>
        </li>

        <li>
          <a href="#">
            <img src={twitter} alt="twitter" title='twitter' />
          </a>
        </li>

        <li>
          <a href="#" className="social-link">
          <img src={instagram} alt="instagram" title='instagram' />
          </a>
        </li>

        <li>
          <a href="#">
            <img src={linkedin} alt="linkedin" title='linkedin' />
          </a>
        </li>

      </MenuSocialContainer>

    </MenuBottom>

  </MobileNavigationMenu>
  )
}

export default MobileNavMenu;