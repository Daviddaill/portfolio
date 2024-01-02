
import React from 'react'
//Icons
import { FaCalendarAlt,FaGoogle, FaServer } from 'react-icons/fa'
import { FaMobileScreen } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoAccessibility } from "react-icons/io5";

//Style
import CSS from './expertise.module.css'
//Hooks
import { useTheme } from '../../../hooks/ThemeContext'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLanguageContent } from '../../../hooks/useLanguageContent';

export default function Expertise() {
  const { home } = useLanguageContent()
  const { darkMode } = useTheme();
  const theme = darkMode ? CSS.dark : CSS.light;

  const expertise = home.expertise
  return (
    <div className={CSS.expertise_container}>
      <div className={CSS.title_container}>
        <h2 className={`primary ${CSS.expertise_title} ${theme}`}>  {expertise.title}</h2>
      </div>
      <div className={CSS.col_right}>
        <Container className={CSS.expertise_items}>

          <Row xs={2} sm={2}>
            <Col className={CSS.expertise_item}>
            <div className={CSS.card}>
              <FaServer className={`primary ${CSS.icon}`} size='30px' />
              <h5 className={`small_title primary ${CSS.expertise_item_title}`}>{expertise.itemTitle1}</h5>
              <p className="small_text">
                {expertise.itemText1}
              </p>
              </div>
            </Col>
            <Col className={CSS.expertise_item}>
            <div className={CSS.card}>
              <FaGoogle className={`primary ${CSS.icon}`} size='30px' />
              <h5 className={`small_title primary ${CSS.expertise_item_title}`}>{expertise.itemTitle2}</h5>
              <p className={`small_text ${CSS.expertise_item_text} `}>
              {expertise.itemText2}
              </p>
</div>
            </Col>
            <Col className={CSS.expertise_item}>
            <div className={CSS.card}>
              < MdOutlineAlternateEmail className={`primary ${CSS.icon}`} size='30px' />
              <h5 className={`small_title primary ${CSS.expertise_item_title}`}>{expertise.itemTitle3}</h5>
              <p className="small_text">
              {expertise.itemText3}
              </p>
            </div>
            </Col>
            <Col className={CSS.expertise_item} >
            <div className={CSS.card}>
              <FaMobileScreen className={`primary ${CSS.icon}`} size='30px' />
              <h5 className={`small_title primary ${CSS.expertise_item_title}`}>{expertise.itemTitle4}</h5>
              <p className="small_text">
              {expertise.itemText4}
              </p>
</div>
            </Col>
            <Col className={CSS.expertise_item} >
            <div className={CSS.card}>
              <FaCalendarAlt className={`primary ${CSS.icon}`} size='30px' />
              <h5 className={`small_title primary ${CSS.expertise_item_title}`}>{expertise.itemTitle5}</h5>
              <p className="small_text">
              {expertise.itemText5}
              </p>
              </div>
            </Col>
            <Col className={CSS.expertise_item}>
            <div className={CSS.card}>
              <IoAccessibility className={`primary ${CSS.icon}`} size='30px' />
              <h5 className={`small_title primary ${CSS.expertise_item_title}`}>{expertise.itemTitle6}</h5>
              <p className="small_text">
              {expertise.itemText6}
              </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>

  )
}
