import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom';
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
import fashionGirl2 from '../../../../assets/navbar/hair-girl.jpg';
import fashionMan from '../../../../assets/navbar/men-fashion.jpg';
import fashionKid from '../../../../assets/navbar/kids1.png';
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
                    <img src={fashionGirl} alt="women's fashion" width="250"
                      height="119" />
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
                    <img src={fashionMan} alt="men's fashion" width="250" height="119" />
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
                    <img src={fashionKid} alt="kid's fashion" width="250" height="119" />
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
                    <img src={fashionGirl2} alt="beauty collection" width="250" height="119" />
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
                    <img src={harryPotter} alt="women's fashion" width="250"
                      height="119" />
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
                    <img src={umbrellaGirl} alt="women's fashion" width="250"
                      height="119" />
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
                    <img src={twining} alt="women's fashion" width="250"
                      height="119" />
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