"use client";

import Script from "next/script";

export default function MailchimpEmbed() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />

      <div id="mc_embed_signup">
        <form
          action="https://haletextilestudio.us16.list-manage.com/subscribe/post?u=d8aed83a6fbcb9fb1b94df503&amp;id=7829e30493&amp;f_id=008b26e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
              <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required defaultValue="" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">First Name</label>
              <input type="text" name="FNAME" className="text" id="mce-FNAME" defaultValue="" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-LNAME">Last Name</label>
              <input type="text" name="LNAME" className="text" id="mce-LNAME" defaultValue="" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-MMERGE11">Contact Us</label>
              <select name="MMERGE11" id="mce-MMERGE11">
                <option value=""></option>
                <option value="Fabric Inquiry">Fabric Inquiry</option>
                <option value="Custom Accessory">Custom Accessory</option>
                <option value="Partner/Trade Account">Partner/Trade Account</option>
                <option value="General Question">General Question</option>
                <option value="Book a Studio Visit">Book a Studio Visit</option>
              </select>
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-MMERGE10">Message</label>
              <input type="text" name="MMERGE10" className="text" id="mce-MMERGE10" defaultValue="" />
            </div>

            <div id="mce-responses" className="clear foot">
              <div className="response" id="mce-error-response" style={{ display: "none" }} />
              <div className="response" id="mce-success-response" style={{ display: "none" }} />
            </div>

            {/* Honeypot — do not remove */}
            <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
              <input type="text" name="b_d8aed83a6fbcb9fb1b94df503_7829e30493" tabIndex={-1} defaultValue="" />
            </div>

            <div className="clear foot">
              <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Send Message" />
            </div>
          </div>
        </form>
      </div>

      <Script src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js" strategy="lazyOnload" />
      <Script id="mc-validate-init" strategy="lazyOnload">{`
        (function($) {
          window.fnames = new Array();
          window.ftypes = new Array();
          fnames[0]='EMAIL'; ftypes[0]='email';
          fnames[1]='FNAME'; ftypes[1]='text';
          fnames[2]='LNAME'; ftypes[2]='text';
          fnames[11]='MMERGE11'; ftypes[11]='dropdown';
          fnames[10]='MMERGE10'; ftypes[10]='text';
        }(jQuery));
        var $mcj = jQuery.noConflict(true);
      `}</Script>
    </>
  );
}
