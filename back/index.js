// server.js
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';
import { removeBackground } from '@imgly/background-removal-node';

const app = express();
app.use(cors());
const upload = multer({ dest: 'uploads/' });

app.post('/api/remove-bg', upload.single('file'), async (req, res) => {
  try {
    const { path: imgPath } = req.file;
    const blob = await removeBackground(imgPath);
    const buf = Buffer.from(await blob.arrayBuffer());
    res.type('png').send(buf);
    fs.unlinkSync(imgPath);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
