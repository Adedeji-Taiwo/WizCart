import React from 'react'
import { useTranslation } from 'react-i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
    DesktopNavigationMenu,
    Container,
    DesktopMenuCategoryList,
    MenuCategory,
    DropdownPanelList,
    MenuTitle,
    PanelListItem,
    DropDownItem
} from './style';
import fashionGirl from '../../../../assets/navbar/fashion-girl.jpg';
import fashionMan from '../../../../assets/navbar/men-fashion.jpg';
import fashionBaby from '../../../../assets/navbar/baby.jpg';
import fashionGirl2 from '../../../../assets/navbar/hair-girl.jpg';
import fashionKid from '../../../../assets/navbar/kid.jpg';
import fashionTeens from '../../../../assets/navbar/teenx.jpg'
import harryPotter from '../../../../assets/navbar/harry-potter2.jpg'
import umbrellaGirl from '../../../../assets/navbar/umbrella-girl.jpg'
import twining from '../../../../assets/navbar/twinning.jpg';


const Navbar = () => {
  const { t } = useTranslation(); 

  return (
    
    <DesktopNavigationMenu>
      <Container>
        <DesktopMenuCategoryList>

          <MenuCategory>
            <a href="#" className='home'>{t("Home")}</a>
          </MenuCategory>

          {/*<MenuCategory>
            <a href="#">WizCart {t('Shopping')}</a>
            <div>
              <DropdownPanelList>
                <MenuTitle>
                  <a href="#">{t("Babies")}</a>
                </MenuTitle>
                <PanelListItem>
                  <a href="#">{t("Clothing")}</a>
                </PanelListItem>
                <PanelListItem>
                  <a href="#">{t("Footwear")}</a>
                </PanelListItem>
                <PanelListItem>
                  <a href="#">{t("Accessories")}</a>
                </PanelListItem>
                <PanelListItem>
                  <a href="#">
                      <LazyLoadImage 
                        src={fashionBaby}
                        effect='blur'
                        alt="baby's fashion"
                      />
                  </a>
                </PanelListItem>
              </DropdownPanelList>
              <DropdownPanelList>
                <MenuTitle>
                  <a href="#">{t("Kids")}</a>
                </MenuTitle>
                <PanelListItem>
                  <a href="#">{t("Clothing")}</a>
                </PanelListItem>
                <PanelListItem>
                  <a href="#">{t("Footwear")}</a>
                </PanelListItem>
                <PanelListItem>
                  <a href="#">{t("Accessories")}</a>
                </PanelListItem>
                <PanelListItem>
                  <a href="#">
                    <LazyLoadImage 
                        src={fashionKid}     
                        effect='blur'
                        alt="kids's fashion"
                      />
                  </a>
                </PanelListItem>
              </DropdownPanelList>
              <DropdownPanelList>
                <MenuTitle>
                  <a href="#">{t("Teens")}</a>
                </MenuTitle>
                 <PanelListItem>
                  <a href="#">{t("Clothing")}</a>
                </PanelListItem>
                <PanelListItem>
                  <a href="#">{t("Footwear")}</a>
                </PanelListItem>
                <PanelListItem>
                  <a href="#">{t("Accessories")}</a>
                </PanelListItem>
                <PanelListItem>
                  <a href="#">
                    <LazyLoadImage 
                        src={fashionTeens}
                        effect='blur'
                        alt="teens's fashion"
                      />
                  </a>
                </PanelListItem>
              </DropdownPanelList>
              <DropdownPanelList>
                <MenuTitle>
                  <a href="#">{t("Others")}</a>
                </MenuTitle>
                <PanelListItem>
                  <a href="#">{t("Skincare")}</a>
                </PanelListItem>
                <PanelListItem>
                  <a href="#">{t("Haircare")}</a>
                </PanelListItem>
                <PanelListItem>
                  <a href="#">{t("Fragrance")}</a>
                </PanelListItem>
                <PanelListItem>
                  <a href="#">
                    <LazyLoadImage 
                        src={fashionGirl2}
                        effect='blur'
                        alt="beauty collection"
                      />
                  </a>
                </PanelListItem>
              </DropdownPanelList>
            </div>
          </MenuCategory>
          */}

          <MenuCategory>
            <a href="#">Marks & Spencer</a>
            <div>
              <DropdownPanelList>
                <MenuTitle>
                  <a href="#">{t("Women's")}</a>
                </MenuTitle>

                <PanelListItem>
                  <a href="#">{t("Clothing")}</a>
                </PanelListItem>

                <PanelListItem>
                  <a href="#">{t("Lingerie")}</a>
                </PanelListItem>

                <PanelListItem>
                  <a href="#">{t("Footwear")}</a>
                </PanelListItem>

                <PanelListItem>
                  <a href="#">{t("Accessories")}</a>
                </PanelListItem>

                <PanelListItem>
                  <a href="#">
                      <LazyLoadImage 
                        src={fashionGirl}
                        effect='blur'
                        alt="women's fashion"
                      />
                  </a>
                </PanelListItem>

              </DropdownPanelList>

              <DropdownPanelList>
                <MenuTitle>
                  <a href="#">{t("Men's")}</a>
                </MenuTitle>

                <PanelListItem>
                  <a href="#">{t("Clothing")}</a>
                </PanelListItem>

                <PanelListItem>
                  <a href="#">{t("Suits")} &#38; {t("Formal")} </a>
                </PanelListItem>

                <PanelListItem>
                  <a href="#">{t("Footwear")}</a>
                </PanelListItem>

                <PanelListItem>
                  <a href="#">{t("Accessories")}</a>
                </PanelListItem>

                <PanelListItem>
                  <a href="#">
                    <LazyLoadImage 
                        src={fashionMan}     
                        effect='blur'
                        alt="men's fashion"
                      />
                  </a>
                </PanelListItem>

              </DropdownPanelList>

              <DropdownPanelList>
                <MenuTitle>
                  <a href="#">{t("Kids'")}</a>
                </MenuTitle>

                <PanelListItem>
                  <a href="#">{t("Baby")}</a>
                </PanelListItem>

                <PanelListItem>
                  <a href="#">{t("Boys")}</a>
                </PanelListItem>

                <PanelListItem>
                  <a href="#">{t("Girls")}</a>
                </PanelListItem>

                <PanelListItem>
                  <a href="#">{t("School Uniform")}</a>
                </PanelListItem>


                <PanelListItem>
                  <a href="#">
                    <LazyLoadImage 
                        src={fashionKid}
                        effect='blur'
                        alt="kid's fashion"
                      />
                  </a>
                </PanelListItem>

              </DropdownPanelList>

              <DropdownPanelList>
                <MenuTitle>
                  <a href="#">{t("Beauty")}</a>
                </MenuTitle>

                <PanelListItem>
                  <a href="#">{t("Skincare")}</a>
                </PanelListItem>

                <PanelListItem>
                  <a href="#">{t("Haircare")}</a>
                </PanelListItem>

                <PanelListItem>
                  <a href="#">{t("Make-up")}</a>
                </PanelListItem>

                <PanelListItem>
                  <a href="#">{t("Fragrance")}</a>
                </PanelListItem>

                <PanelListItem>
                  <a href="#">
                    <LazyLoadImage 
                        src={fashionGirl2}
                        effect='blur'
                        alt="beauty collection"
                      />
                  </a>
                </PanelListItem>

              </DropdownPanelList>

            </div>
          </MenuCategory>

          {/*<MenuCategory>
            <a href="#" className="menu-title">Marks&Spencer</a>
            <ul className="dropdown-list">
              <DropDownItem>
                <a href="#">Women</a>
              </DropDownItem>
              <DropDownItem>
                <a href="#">Men</a>
              </DropDownItem>
              <DropDownItem>
                <a href="#">Kids</a>
              </DropDownItem>
              <DropDownItem>
                <a href="#">Home</a>
              </DropDownItem>
            </ul>
            </MenuCategory>*/}

          <MenuCategory>
            <a href="#">Harry Potter's</a>

            <ul className="dropdown-list">

              <DropDownItem>
                <a href="#">{t("Wands")}</a>
              </DropDownItem>

              <DropDownItem>
                <a href="#">{t("Trunks")}</a>
              </DropDownItem>

              <DropDownItem>
                <a href="#">{t("Clothing")}</a>
              </DropDownItem>

              <DropDownItem>
                <a href="#">{t("Sweets")} &#38; {t("Treats")} </a>
              </DropDownItem>
              
              <PanelListItem>
                  <a href="#">
                     <LazyLoadImage 
                        src={harryPotter}
                        width={250}
                        height={119}
                        effect='blur'
                        alt="women's fashion"
                      />
                  </a>
              </PanelListItem>

            </ul>
          </MenuCategory>

          <MenuCategory>
            <a href="#">James Smith & Sons</a>

            <ul className="dropdown-list">

              <DropDownItem>
                <a href="#">{t("Folding Umbrellas")}</a>
              </DropDownItem>

              <DropDownItem>
                <a href="#">{t("Sun Umbrellas")}</a>
              </DropDownItem>

              <DropDownItem>
                <a href="#">{t("Walking Sticks")}</a>
              </DropDownItem>

              <DropDownItem>
                <a href="#">{t("Seat Sticks")}</a>
              </DropDownItem>

              <PanelListItem>
                  <a href="#">
                       <LazyLoadImage 
                        src={umbrellaGirl}
                        width={250}
                        height={119}
                        effect='blur'
                        alt="women's fashion"
                      />
                  </a>
              </PanelListItem>

            </ul>
          </MenuCategory>

          <MenuCategory>
            <a href="#">Twinings</a>

            <ul className="dropdown-list">

              <DropDownItem>
                <a href="#">{t("Tea")}</a>
              </DropDownItem>

              <DropDownItem>
                <a href="#">{t("Wellbeing Drinks")}</a>
              </DropDownItem>

              <DropDownItem>
                <a href="#">{t("Teaware")}</a>
              </DropDownItem>

              <DropDownItem>
                <a href="#">{t("Treats")}</a>
              </DropDownItem>

              <PanelListItem>
                  <a href="#">
                       <LazyLoadImage 
                        src={twining}
                        width={250}
                        height={119}
                        effect='blur'
                        alt="teaware"
                      />
                  </a>
              </PanelListItem>

            </ul>
          </MenuCategory>

        </DesktopMenuCategoryList>

      </Container>

    </DesktopNavigationMenu>
  )
}

export default Navbar