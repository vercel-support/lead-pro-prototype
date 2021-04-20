import mjml2html from "mjml";
const fs = require("fs");
const path = require("path")
const { join } = require('path')

export default function handler(req, res) {


  const folder = '../'

  const folder_contents = fs.readdirSync(folder)

  console.log(folder_contents)

  res.status(200).json({ folder_contents })

}
