const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env.development.local') });

const { sql } = require('@vercel/postgres');
const { educationHistory, skills, projects } = require('./data');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// ─── ENDPOINT SEED DATABASE ─────────────────────────────
app.get('/api/seed', async (req, res) => {
  try {
    await sql`CREATE TABLE IF NOT EXISTS education (
      id SERIAL PRIMARY KEY,
      institution VARCHAR(255),
      major VARCHAR(255),
      period VARCHAR(255)
    );`;

    await sql`CREATE TABLE IF NOT EXISTS skills (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      level VARCHAR(255)
    );`;

    await sql`CREATE TABLE IF NOT EXISTS projects (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255),
      image VARCHAR(255),
      description TEXT,
      tech VARCHAR(255)[],
      link VARCHAR(255)
    );`;

    await Promise.all(educationHistory.map(e =>
      sql`INSERT INTO education (institution, major, period) VALUES (${e.institution}, ${e.major}, ${e.period});`
    ));
    await Promise.all(skills.map(s =>
      sql`INSERT INTO skills (name, level) VALUES (${s.name}, ${s.level});`
    ));
    await Promise.all(projects.map(p =>
      sql`INSERT INTO projects (title, image, description, tech, link) VALUES (${p.title}, ${p.image}, ${p.description}, ${p.tech}, ${p.link});`
    ));

    res.status(200).json({ message: 'Seeding sukses!' });
  } catch (err) {
    console.error('Error saat seeding:', err);
    res.status(500).json({ error: 'Gagal melakukan seeding', detail: err.message });
  }
});

// ─── ROUTES API ─────────────────────────────────────────
app.get('/', (_, res) => {
  res.send('REST API is running. Endpoints: /api/skills, /api/projects, /api/educationHistory');
});

app.get('/api/skills', (_, res) => res.json(skills));
app.get('/api/projects', (_, res) => res.json(projects));
app.get('/api/educationHistory', (_, res) => res.json(educationHistory));

app.post('/api/skills', (req, res) => {
  const { name, level } = req.body;
  if (!name || !level) return res.status(400).json({ msg: 'name & level wajib' });

  const newSkill = { id: Date.now(), name, level };
  skills.push(newSkill);
  res.status(201).json(newSkill);
});

app.put('/api/skills/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = skills.findIndex(s => s.id === id);
  if (idx === -1) return res.status(404).json({ msg: 'skill tidak ditemukan' });

  skills[idx] = { ...skills[idx], ...req.body };
  res.json(skills[idx]);
});

app.delete('/api/skills/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = skills.findIndex(s => s.id === id);
  if (idx === -1) return res.status(404).json({ msg: 'skill tidak ditemukan' });

  const removed = skills.splice(idx, 1)[0];
  res.json(removed);
});

// ─── START SERVER ───────────────────────────────────────
app.listen(PORT, () => console.log(`API ready → http://localhost:${PORT}`));
