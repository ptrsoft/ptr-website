import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

import procurement1 from "../../../../Assets/Images/Procurement/01.jpg"
// importing styling from assets / styles / pages /
import "../../../../Assets/Styles/pages/Home/MarketingSection.css"
import { Modal ,Box, Paper } from '@mui/material';
import Slider from 'react-slick';
import Ecomnmerce from "../../../../Assets/Images/Home-page.jpg"

// procurement Images 
import ProcurementImg1 from "../../../../Assets/Images/Procurement/01.jpg"
import ProcurementImg2 from "../../../../Assets/Images/Procurement/02.jpg"
import ProcurementImg3 from "../../../../Assets/Images/Procurement/03.jpg"
import ProcurementImg4 from "../../../../Assets/Images/Procurement/04.jpg"
import ProcurementImg5 from "../../../../Assets/Images/Procurement/05.jpg"
import ProcurementImg6 from "../../../../Assets/Images/Procurement/06.jpg"
import ProcurementImg7 from "../../../../Assets/Images/Procurement/07.jpg"
import ProcurementImg8 from "../../../../Assets/Images/Procurement/08.png"
 import ProcurementImg9 from "../../../../Assets/Images/Procurement/09.jpg"
 const MarketingSection = () => {
   // Settings for the slick carousel
   const [open,setOpen] = useState(false)
   const sliderRef = useRef(null); // Use ref to access the slider instance

   const settings = {
    dots: true, // Show dots below the slider
    infinite: true, // Infinite looping of images
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: false, // Enable autoplay
    autoplaySpeed: 2000, // Time between each slide change
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    
  }

  
  const cardData = [
    {
      title: "Procurement",
      subtitle: "Streamlined Supply Management",
      imageSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARBSURBVHgB7VmLcdswDH3NdQCNgE7QZANlgiYTRBs4mcDqBE0niDKB0wniDdxOYHcCZ4NW70SUFC1SoqQk9l3fHc4WSVEAAeJDAu+Lc5wwspqKmp5r+lPTtqZFTYITAQVY1rRHIwB/72EFIj3gBATawDJ84/XlsAKSBEcMmpDLLDVBk6rQ1tJJCELmBY1J8VmZp0nlNZU4EkHohbjKZHSFhvFb06eCKAQN04XTVmKkIB8xHXlNV2jsPnPad3hDTBGEq/8NjSDEuqanmn4gLISY8etA32evLTPjMzNn13uTQAHUvku0NRFCCbuZaWZL859zuS5YzW+BtnPQ93LMAIF1oyuk27Kg2RNbtBnUBREzrjDt/BbN9tx5b4+JGYE4DNxiOsggF4Mr72t0ayjr4IGCPGMkBDOtxgDk6A6ainvT3xLyDMOg/v+ypp94G7z0tA/Zly3oppzDnHQ+mlRoxcV8rwz0c1G3SITAJnNzoEA7FVkGxj2bMbnXrotaIhErzJsyVGgYJNTWubo33jcE1rFQqAdYF71BIgTzaoMo0DZTPruueA/rsfwY4sYSCkPB/pnnh8hHKzPwE+ZNN8gAPd+FM29uiJF96CYWQ3dotBsEJX/CcAiaFS7RxAgXBazp8FdXXjAeFHhj5goKnyPuy/0J3RSjy479DUqNqElxH15hHAozRzC23fYNMMgchkozXmBXaIF23aHxCIjXJX3IPEGC76hH6YMmj10xpoD1OrpJ1aR8U6BGKliNxmJWARvZ9X8eiuzcdDv0gwwwbe/abDRLRuFL8/xY0zW6M4Mnw9SFeY5teOkaE0tRXhCHGFoH+n874xQce43+9CMZIUG4yo8YhtDHVUuaTizROIFXSTrPIkxEffMA0IRoKl+dZ/VwyQlfH4Zmv11QTYRWODNUmmdq+c60za6VmCBa+Ojphx9TKMgah4cOCnoemtIX85zBxovReyEV9Oeu79fydoM20znCZS+f3TxKqc9k2R/T2Dls/ieIHLNqMCwD7X4SWcLGiRXaKYqgHU9ypKPASFNUU+pChY4y03zITVM2HXPeIB2CYVo8QIZ44XKFnpRgZlQYWA+FNnuW2O5CMA8EjRYrjCwjtMzsYlqLntCH1SlMTdGJChOr0xztUz0xv7oHysA76qFoz3qJMxYLjKzNFWKY0lrdpxVsNVegfePkCj5qgxqcO/Mlo6s4Gkp8zz0t1HkE6cgxsnrU0/h7MwnzIuZEQyIvx+y8sUtnnh3SoPcqOzSp/w6JEEw/LclhNVEhDQJryhvMsLkLpIGmRA24JlmOeF+PfaZm2weCcHKJjGefy7x/RxKLNdzICxzeh8ySDeewggj6V7ZE+7DBhxtLXHIdhLrnHDNhytVbGWj/jkZA9xpNU346kl94hSu0OS5DfVR4B0ypEI8K/wU5NlAQjcx7538sz3mzensMXDc6pOaY/RRkKv4CTRqNuFGDjZQAAAAASUVORK5CYII=",
    },
    {
      title: "Inventory",
      subtitle: "Optimized Stock Control",
      imageSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARBSURBVHgB7VmLcdswDH3NdQCNgE7QZANlgiYTRBs4mcDqBE0niDKB0wniDdxOYHcCZ4NW70SUFC1SoqQk9l3fHc4WSVEAAeJDAu+Lc5wwspqKmp5r+lPTtqZFTYITAQVY1rRHIwB/72EFIj3gBATawDJ84/XlsAKSBEcMmpDLLDVBk6rQ1tJJCELmBY1J8VmZp0nlNZU4EkHohbjKZHSFhvFb06eCKAQN04XTVmKkIB8xHXlNV2jsPnPad3hDTBGEq/8NjSDEuqanmn4gLISY8etA32evLTPjMzNn13uTQAHUvku0NRFCCbuZaWZL859zuS5YzW+BtnPQ93LMAIF1oyuk27Kg2RNbtBnUBREzrjDt/BbN9tx5b4+JGYE4DNxiOsggF4Mr72t0ayjr4IGCPGMkBDOtxgDk6A6ainvT3xLyDMOg/v+ypp94G7z0tA/Zly3oppzDnHQ+mlRoxcV8rwz0c1G3SITAJnNzoEA7FVkGxj2bMbnXrotaIhErzJsyVGgYJNTWubo33jcE1rFQqAdYF71BIgTzaoMo0DZTPruueA/rsfwY4sYSCkPB/pnnh8hHKzPwE+ZNN8gAPd+FM29uiJF96CYWQ3dotBsEJX/CcAiaFS7RxAgXBazp8FdXXjAeFHhj5goKnyPuy/0J3RSjy479DUqNqElxH15hHAozRzC23fYNMMgchkozXmBXaIF23aHxCIjXJX3IPEGC76hH6YMmj10xpoD1OrpJ1aR8U6BGKliNxmJWARvZ9X8eiuzcdDv0gwwwbe/abDRLRuFL8/xY0zW6M4Mnw9SFeY5teOkaE0tRXhCHGFoH+n874xQce43+9CMZIUG4yo8YhtDHVUuaTizROIFXSTrPIkxEffMA0IRoKl+dZ/VwyQlfH4Zmv11QTYRWODNUmmdq+c60za6VmCBa+Ojphx9TKMgah4cOCnoemtIX85zBxovReyEV9Oeu79fydoM20znCZS+f3TxKqc9k2R/T2Dls/ieIHLNqMCwD7X4SWcLGiRXaKYqgHU9ypKPASFNUU+pChY4y03zITVM2HXPeIB2CYVo8QIZ44XKFnpRgZlQYWA+FNnuW2O5CMA8EjRYrjCwjtMzsYlqLntCH1SlMTdGJChOr0xztUz0xv7oHysA76qFoz3qJMxYLjKzNFWKY0lrdpxVsNVegfePkCj5qgxqcO/Mlo6s4Gkp8zz0t1HkE6cgxsnrU0/h7MwnzIuZEQyIvx+y8sUtnnh3SoPcqOzSp/w6JEEw/LclhNVEhDQJryhvMsLkLpIGmRA24JlmOeF+PfaZm2weCcHKJjGefy7x/RxKLNdzICxzeh8ySDeewggj6V7ZE+7DBhxtLXHIdhLrnHDNhytVbGWj/jkZA9xpNU346kl94hSu0OS5DfVR4B0ypEI8K/wU5NlAQjcx7538sz3mzensMXDc6pOaY/RRkKv4CTRqNuFGDjZQAAAAASUVORK5CYII=",
    },
    {
      title: "POS",
      subtitle: "Seamless Sales Transactions",
      imageSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARBSURBVHgB7VmLcdswDH3NdQCNgE7QZANlgiYTRBs4mcDqBE0niDKB0wniDdxOYHcCZ4NW70SUFC1SoqQk9l3fHc4WSVEAAeJDAu+Lc5wwspqKmp5r+lPTtqZFTYITAQVY1rRHIwB/72EFIj3gBATawDJ84/XlsAKSBEcMmpDLLDVBk6rQ1tJJCELmBY1J8VmZp0nlNZU4EkHohbjKZHSFhvFb06eCKAQN04XTVmKkIB8xHXlNV2jsPnPad3hDTBGEq/8NjSDEuqanmn4gLISY8etA32evLTPjMzNn13uTQAHUvku0NRFCCbuZaWZL859zuS5YzW+BtnPQ93LMAIF1oyuk27Kg2RNbtBnUBREzrjDt/BbN9tx5b4+JGYE4DNxiOsggF4Mr72t0ayjr4IGCPGMkBDOtxgDk6A6ainvT3xLyDMOg/v+ypp94G7z0tA/Zly3oppzDnHQ+mlRoxcV8rwz0c1G3SITAJnNzoEA7FVkGxj2bMbnXrotaIhErzJsyVGgYJNTWubo33jcE1rFQqAdYF71BIgTzaoMo0DZTPruueA/rsfwY4sYSCkPB/pnnh8hHKzPwE+ZNN8gAPd+FM29uiJF96CYWQ3dotBsEJX/CcAiaFS7RxAgXBazp8FdXXjAeFHhj5goKnyPuy/0J3RSjy479DUqNqElxH15hHAozRzC23fYNMMgchkozXmBXaIF23aHxCIjXJX3IPEGC76hH6YMmj10xpoD1OrpJ1aR8U6BGKliNxmJWARvZ9X8eiuzcdDv0gwwwbe/abDRLRuFL8/xY0zW6M4Mnw9SFeY5teOkaE0tRXhCHGFoH+n874xQce43+9CMZIUG4yo8YhtDHVUuaTizROIFXSTrPIkxEffMA0IRoKl+dZ/VwyQlfH4Zmv11QTYRWODNUmmdq+c60za6VmCBa+Ojphx9TKMgah4cOCnoemtIX85zBxovReyEV9Oeu79fydoM20znCZS+f3TxKqc9k2R/T2Dls/ieIHLNqMCwD7X4SWcLGiRXaKYqgHU9ypKPASFNUU+pChY4y03zITVM2HXPeIB2CYVo8QIZ44XKFnpRgZlQYWA+FNnuW2O5CMA8EjRYrjCwjtMzsYlqLntCH1SlMTdGJChOr0xztUz0xv7oHysA76qFoz3qJMxYLjKzNFWKY0lrdpxVsNVegfePkCj5qgxqcO/Mlo6s4Gkp8zz0t1HkE6cgxsnrU0/h7MwnzIuZEQyIvx+y8sUtnnh3SoPcqOzSp/w6JEEw/LclhNVEhDQJryhvMsLkLpIGmRA24JlmOeF+PfaZm2weCcHKJjGefy7x/RxKLNdzICxzeh8ySDeewggj6V7ZE+7DBhxtLXHIdhLrnHDNhytVbGWj/jkZA9xpNU346kl94hSu0OS5DfVR4B0ypEI8K/wU5NlAQjcx7538sz3mzensMXDc6pOaY/RRkKv4CTRqNuFGDjZQAAAAASUVORK5CYII=",
    },
    
    {
      title: "Ecommerce",
      subtitle: "Effortless Online Shopping",
      imageSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARBSURBVHgB7VmLcdswDH3NdQCNgE7QZANlgiYTRBs4mcDqBE0niDKB0wniDdxOYHcCZ4NW70SUFC1SoqQk9l3fHc4WSVEAAeJDAu+Lc5wwspqKmp5r+lPTtqZFTYITAQVY1rRHIwB/72EFIj3gBATawDJ84/XlsAKSBEcMmpDLLDVBk6rQ1tJJCELmBY1J8VmZp0nlNZU4EkHohbjKZHSFhvFb06eCKAQN04XTVmKkIB8xHXlNV2jsPnPad3hDTBGEq/8NjSDEuqanmn4gLISY8etA32evLTPjMzNn13uTQAHUvku0NRFCCbuZaWZL859zuS5YzW+BtnPQ93LMAIF1oyuk27Kg2RNbtBnUBREzrjDt/BbN9tx5b4+JGYE4DNxiOsggF4Mr72t0ayjr4IGCPGMkBDOtxgDk6A6ainvT3xLyDMOg/v+ypp94G7z0tA/Zly3oppzDnHQ+mlRoxcV8rwz0c1G3SITAJnNzoEA7FVkGxj2bMbnXrotaIhErzJsyVGgYJNTWubo33jcE1rFQqAdYF71BIgTzaoMo0DZTPruueA/rsfwY4sYSCkPB/pnnh8hHKzPwE+ZNN8gAPd+FM29uiJF96CYWQ3dotBsEJX/CcAiaFS7RxAgXBazp8FdXXjAeFHhj5goKnyPuy/0J3RSjy479DUqNqElxH15hHAozRzC23fYNMMgchkozXmBXaIF23aHxCIjXJX3IPEGC76hH6YMmj10xpoD1OrpJ1aR8U6BGKliNxmJWARvZ9X8eiuzcdDv0gwwwbe/abDRLRuFL8/xY0zW6M4Mnw9SFeY5teOkaE0tRXhCHGFoH+n874xQce43+9CMZIUG4yo8YhtDHVUuaTizROIFXSTrPIkxEffMA0IRoKl+dZ/VwyQlfH4Zmv11QTYRWODNUmmdq+c60za6VmCBa+Ojphx9TKMgah4cOCnoemtIX85zBxovReyEV9Oeu79fydoM20znCZS+f3TxKqc9k2R/T2Dls/ieIHLNqMCwD7X4SWcLGiRXaKYqgHU9ypKPASFNUU+pChY4y03zITVM2HXPeIB2CYVo8QIZ44XKFnpRgZlQYWA+FNnuW2O5CMA8EjRYrjCwjtMzsYlqLntCH1SlMTdGJChOr0xztUz0xv7oHysA76qFoz3qJMxYLjKzNFWKY0lrdpxVsNVegfePkCj5qgxqcO/Mlo6s4Gkp8zz0t1HkE6cgxsnrU0/h7MwnzIuZEQyIvx+y8sUtnnh3SoPcqOzSp/w6JEEw/LclhNVEhDQJryhvMsLkLpIGmRA24JlmOeF+PfaZm2weCcHKJjGefy7x/RxKLNdzICxzeh8ySDeewggj6V7ZE+7DBhxtLXHIdhLrnHDNhytVbGWj/jkZA9xpNU346kl94hSu0OS5DfVR4B0ypEI8K/wU5NlAQjcx7538sz3mzensMXDc6pOaY/RRkKv4CTRqNuFGDjZQAAAAASUVORK5CYII=",
    },
    {
      title: "Whatsapp Commerce",
      subtitle: "Chat-Driven Shopping",
      imageSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARBSURBVHgB7VmLcdswDH3NdQCNgE7QZANlgiYTRBs4mcDqBE0niDKB0wniDdxOYHcCZ4NW70SUFC1SoqQk9l3fHc4WSVEAAeJDAu+Lc5wwspqKmp5r+lPTtqZFTYITAQVY1rRHIwB/72EFIj3gBATawDJ84/XlsAKSBEcMmpDLLDVBk6rQ1tJJCELmBY1J8VmZp0nlNZU4EkHohbjKZHSFhvFb06eCKAQN04XTVmKkIB8xHXlNV2jsPnPad3hDTBGEq/8NjSDEuqanmn4gLISY8etA32evLTPjMzNn13uTQAHUvku0NRFCCbuZaWZL859zuS5YzW+BtnPQ93LMAIF1oyuk27Kg2RNbtBnUBREzrjDt/BbN9tx5b4+JGYE4DNxiOsggF4Mr72t0ayjr4IGCPGMkBDOtxgDk6A6ainvT3xLyDMOg/v+ypp94G7z0tA/Zly3oppzDnHQ+mlRoxcV8rwz0c1G3SITAJnNzoEA7FVkGxj2bMbnXrotaIhErzJsyVGgYJNTWubo33jcE1rFQqAdYF71BIgTzaoMo0DZTPruueA/rsfwY4sYSCkPB/pnnh8hHKzPwE+ZNN8gAPd+FM29uiJF96CYWQ3dotBsEJX/CcAiaFS7RxAgXBazp8FdXXjAeFHhj5goKnyPuy/0J3RSjy479DUqNqElxH15hHAozRzC23fYNMMgchkozXmBXaIF23aHxCIjXJX3IPEGC76hH6YMmj10xpoD1OrpJ1aR8U6BGKliNxmJWARvZ9X8eiuzcdDv0gwwwbe/abDRLRuFL8/xY0zW6M4Mnw9SFeY5teOkaE0tRXhCHGFoH+n874xQce43+9CMZIUG4yo8YhtDHVUuaTizROIFXSTrPIkxEffMA0IRoKl+dZ/VwyQlfH4Zmv11QTYRWODNUmmdq+c60za6VmCBa+Ojphx9TKMgah4cOCnoemtIX85zBxovReyEV9Oeu79fydoM20znCZS+f3TxKqc9k2R/T2Dls/ieIHLNqMCwD7X4SWcLGiRXaKYqgHU9ypKPASFNUU+pChY4y03zITVM2HXPeIB2CYVo8QIZ44XKFnpRgZlQYWA+FNnuW2O5CMA8EjRYrjCwjtMzsYlqLntCH1SlMTdGJChOr0xztUz0xv7oHysA76qFoz3qJMxYLjKzNFWKY0lrdpxVsNVegfePkCj5qgxqcO/Mlo6s4Gkp8zz0t1HkE6cgxsnrU0/h7MwnzIuZEQyIvx+y8sUtnnh3SoPcqOzSp/w6JEEw/LclhNVEhDQJryhvMsLkLpIGmRA24JlmOeF+PfaZm2weCcHKJjGefy7x/RxKLNdzICxzeh8ySDeewggj6V7ZE+7DBhxtLXHIdhLrnHDNhytVbGWj/jkZA9xpNU346kl94hSu0OS5DfVR4B0ypEI8K/wU5NlAQjcx7538sz3mzensMXDc6pOaY/RRkKv4CTRqNuFGDjZQAAAAASUVORK5CYII=",
    }, {
      title: "Accounting",
      subtitle: "Integrated Financial Solutions",
      imageSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARBSURBVHgB7VmLcdswDH3NdQCNgE7QZANlgiYTRBs4mcDqBE0niDKB0wniDdxOYHcCZ4NW70SUFC1SoqQk9l3fHc4WSVEAAeJDAu+Lc5wwspqKmp5r+lPTtqZFTYITAQVY1rRHIwB/72EFIj3gBATawDJ84/XlsAKSBEcMmpDLLDVBk6rQ1tJJCELmBY1J8VmZp0nlNZU4EkHohbjKZHSFhvFb06eCKAQN04XTVmKkIB8xHXlNV2jsPnPad3hDTBGEq/8NjSDEuqanmn4gLISY8etA32evLTPjMzNn13uTQAHUvku0NRFCCbuZaWZL859zuS5YzW+BtnPQ93LMAIF1oyuk27Kg2RNbtBnUBREzrjDt/BbN9tx5b4+JGYE4DNxiOsggF4Mr72t0ayjr4IGCPGMkBDOtxgDk6A6ainvT3xLyDMOg/v+ypp94G7z0tA/Zly3oppzDnHQ+mlRoxcV8rwz0c1G3SITAJnNzoEA7FVkGxj2bMbnXrotaIhErzJsyVGgYJNTWubo33jcE1rFQqAdYF71BIgTzaoMo0DZTPruueA/rsfwY4sYSCkPB/pnnh8hHKzPwE+ZNN8gAPd+FM29uiJF96CYWQ3dotBsEJX/CcAiaFS7RxAgXBazp8FdXXjAeFHhj5goKnyPuy/0J3RSjy479DUqNqElxH15hHAozRzC23fYNMMgchkozXmBXaIF23aHxCIjXJX3IPEGC76hH6YMmj10xpoD1OrpJ1aR8U6BGKliNxmJWARvZ9X8eiuzcdDv0gwwwbe/abDRLRuFL8/xY0zW6M4Mnw9SFeY5teOkaE0tRXhCHGFoH+n874xQce43+9CMZIUG4yo8YhtDHVUuaTizROIFXSTrPIkxEffMA0IRoKl+dZ/VwyQlfH4Zmv11QTYRWODNUmmdq+c60za6VmCBa+Ojphx9TKMgah4cOCnoemtIX85zBxovReyEV9Oeu79fydoM20znCZS+f3TxKqc9k2R/T2Dls/ieIHLNqMCwD7X4SWcLGiRXaKYqgHU9ypKPASFNUU+pChY4y03zITVM2HXPeIB2CYVo8QIZ44XKFnpRgZlQYWA+FNnuW2O5CMA8EjRYrjCwjtMzsYlqLntCH1SlMTdGJChOr0xztUz0xv7oHysA76qFoz3qJMxYLjKzNFWKY0lrdpxVsNVegfePkCj5qgxqcO/Mlo6s4Gkp8zz0t1HkE6cgxsnrU0/h7MwnzIuZEQyIvx+y8sUtnnh3SoPcqOzSp/w6JEEw/LclhNVEhDQJryhvMsLkLpIGmRA24JlmOeF+PfaZm2weCcHKJjGefy7x/RxKLNdzICxzeh8ySDeewggj6V7ZE+7DBhxtLXHIdhLrnHDNhytVbGWj/jkZA9xpNU346kl94hSu0OS5DfVR4B0ypEI8K/wU5NlAQjcx7538sz3mzensMXDc6pOaY/RRkKv4CTRqNuFGDjZQAAAAASUVORK5CYII=",
    },
    
    // Repeat for other cards as needed...
  ];
  
   // Handle previous and next button clicks
   const goToPrev = () => {
    sliderRef.current.slickPrev(); // Navigate to previous slide
  };

  const goToNext = () => {
    sliderRef.current.slickNext(); // Navigate to next slide
  };



  return (
    <div id='AI-Native' className='marketing_sec space-container'>

{/* left */}
<div className="marketing_sec_left">
<h2>Our Complete <a style={{color:'#666AE5'}}>AI-Native</a> E-commerce, Supply Chain & Farmer-Consumer Connection Platform</h2>

{/* text rows container */}
<div className='marketing_sec_left_text_con'>

<div className='marketing_sec_left_text_row'>
    <img src='/Images/plus.svg' alt="" />
    <span> Seamless Farmer-to-Consumer Marketplace </span>
</div>

     <div className='marketing_sec_left_text_row'>
    <img src='/Images/plus.svg' alt="" />
    <span> AI-Powered Supply Chain Optimization </span>
</div>

     <div className='marketing_sec_left_text_row'>
    <img src='/Images/plus.svg' alt="" />
    <span> Intelligent Inventory & Demand Forecasting </span>
</div>

     <div className='marketing_sec_left_text_row'>
    <img src='/Images/plus.svg' alt="" />
    <span>Automated Order & Payment Processing </span>
</div>

     <div className='marketing_sec_left_text_row'>
    <img src='/Images/plus.svg' alt="" />
    <span> Personalized Consumer Experience </span>
</div> 

  <div className='marketing_sec_left_text_row'>
    <img src='/Images/plus.svg' alt="" />
    <span> Smart Resource Allocation </span>
</div> 

  <div className='marketing_sec_left_text_row'>
    <img src='/Images/plus.svg' alt="" />
    <span> Sustainable & Scalable Growth </span>
</div>
     
 

</div>

</div>

{/* right */}
<div className="marketing_sec_right flex flex-col">
 <div className=' gap-3 content-center flex flex-wrap    overflow-hidden w-[40vw] h-[400px]' >
 

{cardData.map((card, index) => (
        <div onClick={()=> setOpen(true)} key={index} className="w-[49%] h-[100px] hover:opacity-70 cursor-pointer bg-white p-3 rounded-lg flex border border-gray-300 justify-start gap-2 items-center">
          <img style={{ width: "40px", }}  src={card.imageSrc} alt={card.title} />
          <div>
            <strong>{card.title}</strong>
            <p className="text-xs">{card.subtitle}</p>
          </div>
        </div>
      ))}

    
</div>

 </div>

 {/* Modal Component */}
 <Modal
        open={open}
        onClose={()=> setOpen(false)}
 
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={modalStyle}>

          <Slider  ref={sliderRef} {...settings}>
       
          <div>
             <img src={ProcurementImg1} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>  
          <div>
             <img src={ProcurementImg2} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img src={ProcurementImg3} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>  
          <div>
             <img src={ProcurementImg3} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>  
          <div>
             <img src={ProcurementImg3} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>  
          <div>
             <img src={ProcurementImg3} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>  
          <div>
             <img src={ProcurementImg3} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>  
          
      </Slider>
    
          </Box>
      </Modal>
    </div>
  )
}

export default MarketingSection


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className={className}
    style={{ ...style, display: "flex",color:"red", justifyContent:"center",alignItems:"center", width:"40px",height:"40px",borderRadius:"50%", background: "#666AE5" }}
    onClick={onClick}
  />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex",color:"red", justifyContent:"center",alignItems:"center", width:"40px",height:"40px",borderRadius:"50%", background: "#666AE5" }}
      onClick={onClick}
    />
  );
}


// The modal styles can be customized using the Box component
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  // height:"80%",
  bgcolor: 'white',
   boxShadow: 24,borderRadius:2,
  p: 4,
};


// Sample Data for Slider
const sliderData = [
  {
    id: 1,
    imgSrc: procurement1,

    altText: '',
  },
  {
    id: 2,
    imgSrc: procurement1,

    altText: 'Image 2',
  },
  {
    id: 3,
    imgSrc: procurement1,
    altText: 'Image 3',
  },
  {
    id: 4,
    imgSrc: procurement1,

    altText: 'Image 4',
  },
];
