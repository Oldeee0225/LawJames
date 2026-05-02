const fs = require('fs');
const files = [
  'src/views/Services/EntityForm.tsx',
  'src/views/Services/HoldingForm.tsx',
  'src/views/Services/ResidentForm.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  content = content.replace(/(export default function [a-zA-Z]+\(\) \{)/, '\\n  const { t } = useLanguage();');
  content = content.replace(/>Back<\/span>/g, '>{t("forms.back")}<\/span>');
  content = content.replace(/Specialized Service/g, '{t("forms.specializedService")}');
  content = content.replace(/CONTACT AN EXPERT/g, '{t("forms.contactExpert")}');

  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
});
