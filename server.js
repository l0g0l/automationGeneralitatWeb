
const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch({ headless: false, slowMo: 50});
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://web.gencat.cat/ca/inici', {waitUntil: 'load', timeout: 0 } ); // he tenido que añadir estos eventos ya que me daba problemas la carga de la página excediéndose su tiempo de ejecución 
  await page.fill('#cercadorOcultGoogle', 'Agenda Cultural'); 
  await page.click('[aria-label="Cercar"]');
  await page.waitForTimeout ( 3000 ); // he añadido este timeout para que no se cierre de manera inmediata
  await browser.close();

 })();
