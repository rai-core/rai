const fs = require('fs');
const path = require('path');

const pages = [
  'index.md',
  'table-of-contents.md',
  'canon.md',
  'polarities-and-tensions.md',
  'instruction-sets.md',
  'reflection-questions.md',
  'dreams-language-bank.md',
  'memory-log.md',
  'boundary-moments.md',
  'drift-log.md',
  'feedback-inbox.md',
  'stewardship-council.md',
  'seed-posts.md'
];

pages.forEach((filename) => {
  const filePath = path.join(__dirname, filename);

  if (!fs.existsSync(filePath)) {
    const content = `# ${filename.replace('.md', '').replace(/-/g, ' ')}\n\n> This page has been created. Content will be added soon.\n`;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Created: ${filename}`);
  } else {
    console.log(`⚠️ Already exists: ${filename}`);
  }
});
