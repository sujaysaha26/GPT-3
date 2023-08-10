import React from 'react';
import './brand.css';
import google from '../../assets/google.png';
import slack from '../../assets/slack.png';
import atlassian from '../../assets/atlassian.png';
import dropbox from '../../assets/dropbox.png';
import shopify from '../../assets/shopify.png';

const Brand = () => {
  return (
    <div className='gpt3__brand'>
      <div><img src={google} alt="Google" srcset="" /></div>
      <div><img src={slack} alt="Slack" srcset="" /></div>
      <div><img src={atlassian} alt="Altassian" srcset="" /></div>
      <div><img src={dropbox} alt="Dropbox" srcset="" /></div>
      <div><img src={shopify} alt="Shopify" srcset="" /></div>
    </div>
  )
}

export default Brand;