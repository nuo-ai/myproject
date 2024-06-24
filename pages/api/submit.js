// pages/api/submit.js

import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false
  }
};

const handler = (req, res) => {
  const form = new formidable.IncomingForm();

  form.uploadDir = path.join(process.cwd(), '/public/uploads');
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const formData = JSON.parse(fields.formData);
    // 处理表单数据和文件
    // 这里可以添加 OCR 和 NLP 处理逻辑
    // 并将提取的信息与表单数据整合

    res.status(200).json({ message: 'Form submitted successfully', formData, files });
  });
};

export default handler;
