import mjml2html from "mjml";
const fs = require("fs");
const path = require("path")
const { join } = require('path')

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email } = JSON.parse(req.body);
    
    const mjMail = fs.readFileSync(join("_files", `${email}.mjml`), "utf8");

    console.log(mjMail);
    
    // const { html, errors } = mjml2html(mjMail, {
    //   filePath: "emails",
    // });

    // res.status(200).json({ html });
  } else {
  }
}
