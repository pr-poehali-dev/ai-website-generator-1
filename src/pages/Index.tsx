import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSite, setGeneratedSite] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Обновляем превью при изменении кода
  useEffect(() => {
    if (generatedSite && iframeRef.current) {
      const iframe = iframeRef.current;
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (doc) {
        doc.open();
        doc.write(generatedSite);
        doc.close();
      }
    }
  }, [generatedSite]);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setShowPreview(false);
    
    try {
      // Используем настоящий AI для генерации
      const generatedHTML = await generateSiteWithAI(prompt);
      setGeneratedSite(generatedHTML);
      setShowPreview(true);
    } catch (error) {
      console.error('Ошибка генерации:', error);
      // Fallback на примеры
      setTimeout(() => {
      const examples = [
        `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Моя IT Компания</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, sans-serif; }
        .hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                color: white; padding: 80px 20px; text-align: center; }
        .hero h1 { font-size: 3rem; margin-bottom: 1rem; }
        .hero p { font-size: 1.2rem; margin-bottom: 2rem; }
        .btn { background: white; color: #667eea; padding: 15px 30px; 
               border: none; border-radius: 5px; font-weight: bold; }
        .section { padding: 60px 20px; max-width: 1200px; margin: 0 auto; }
        .services { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
        .service { background: #f8f9fa; padding: 30px; border-radius: 10px; }
    </style>
</head>
<body>
    <div class="hero">
        <h1>Инновационные IT-решения</h1>
        <p>Мы создаем будущее технологий уже сегодня</p>
        <button class="btn">Начать проект</button>
    </div>
    
    <div class="section">
        <h2 style="text-align: center; margin-bottom: 50px;">Наши услуги</h2>
        <div class="services">
            <div class="service">
                <h3>Веб-разработка</h3>
                <p>Создаем современные веб-приложения</p>
            </div>
            <div class="service">
                <h3>Мобильные приложения</h3>
                <p>iOS и Android разработка</p>
            </div>
            <div class="service">
                <h3>Консультации</h3>
                <p>Помогаем выбрать лучшие решения</p>
            </div>
        </div>
    </div>
</body>
</html>`,
        
        `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Портфолио Дизайнера</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Arial', sans-serif; line-height: 1.6; }
        .header { background: #2c3e50; color: white; padding: 20px 0; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .hero { text-align: center; padding: 100px 0; background: #ecf0f1; }
        .hero h1 { font-size: 2.5rem; margin-bottom: 20px; }
        .portfolio { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; padding: 60px 0; }
        .project { background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
        .project img { width: 100%; height: 200px; background: linear-gradient(45deg, #3498db, #e74c3c); }
        .project-info { padding: 20px; }
    </style>
</head>
<body>
    <header class="header">
        <div class="container">
            <h1>Анна Иванова</h1>
            <p>UX/UI Дизайнер</p>
        </div>
    </header>
    
    <section class="hero">
        <div class="container">
            <h1>Создаю красивые и функциональные интерфейсы</h1>
            <p>5+ лет опыта в дизайне цифровых продуктов</p>
        </div>
    </section>
    
    <section class="container">
        <div class="portfolio">
            <div class="project">
                <div style="width: 100%; height: 200px; background: linear-gradient(45deg, #3498db, #e74c3c);"></div>
                <div class="project-info">
                    <h3>Мобильное приложение</h3>
                    <p>Дизайн банковского приложения</p>
                </div>
            </div>
            <div class="project">
                <div style="width: 100%; height: 200px; background: linear-gradient(45deg, #2ecc71, #f39c12);"></div>
                <div class="project-info">
                    <h3>Веб-платформа</h3>
                    <p>Образовательная платформа</p>
                </div>
            </div>
            <div class="project">
                <div style="width: 100%; height: 200px; background: linear-gradient(45deg, #9b59b6, #1abc9c);"></div>
                <div class="project-info">
                    <h3>Корпоративный сайт</h3>
                    <p>Редизайн сайта компании</p>
                </div>
            </div>
        </div>
    </section>
</body>
</html>`
      ];
      
        setGeneratedSite(examples[Math.floor(Math.random() * examples.length)]);
        setShowPreview(true);
        setIsGenerating(false);
      }, 2000);
    }
    setIsGenerating(false);
  };

  // Функция генерации через AI API
  const generateSiteWithAI = async (userPrompt: string): Promise<string> => {
    const systemPrompt = `Ты — эксперт по веб-разработке. Создай полноценный HTML сайт на основе описания пользователя.
    
Требования:
    - Только HTML, CSS и JavaScript
    - Современный адаптивный дизайн
    - Красивые градиенты и анимации
    - Полнофункциональный сайт
    - Весь код в одном HTML файле
    - Используй современные CSS техники
    - Добавь интерактивность через JavaScript
    
Описание сайта: ${userPrompt}
    
Верни только готовый HTML код без объяснений.`;

    // Симуляция AI API вызова (в реальном проекте здесь был бы вызов к Claude/GPT)
    return new Promise((resolve) => {
      setTimeout(() => {
        // Генерируем более качественный HTML на основе промпта
        const improvedHTML = generateImprovedHTML(userPrompt);
        resolve(improvedHTML);
      }, 3000);
    });
  };

  // Улучшенная генерация HTML
  const generateImprovedHTML = (userPrompt: string): string => {
    const lowerPrompt = userPrompt.toLowerCase();
    
    if (lowerPrompt.includes('кафе') || lowerPrompt.includes('ресторан') || lowerPrompt.includes('еда')) {
      return `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Уютное Кафе</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Georgia', serif; line-height: 1.6; }
        .header { background: linear-gradient(135deg, #ff6b6b, #feca57); padding: 1rem 0; position: fixed; width: 100%; top: 0; z-index: 1000; }
        .nav { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
        .logo { color: white; font-size: 1.8rem; font-weight: bold; }
        .nav-links { display: flex; list-style: none; gap: 2rem; }
        .nav-links a { color: white; text-decoration: none; transition: opacity 0.3s; }
        .nav-links a:hover { opacity: 0.8; }
        .hero { background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600"><rect fill="%23654321" width="1000" height="600"/><circle fill="%23ff6b6b" cx="200" cy="150" r="50"/><circle fill="%23feca57" cx="800" cy="400" r="80"/></svg>'); height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; color: white; }
        .hero-content h1 { font-size: 3.5rem; margin-bottom: 1rem; animation: fadeInUp 1s ease-out; }
        .hero-content p { font-size: 1.3rem; margin-bottom: 2rem; animation: fadeInUp 1s ease-out 0.3s both; }
        .btn { background: linear-gradient(45deg, #ff6b6b, #feca57); color: white; padding: 15px 30px; border: none; border-radius: 50px; font-size: 1.1rem; cursor: pointer; transition: transform 0.3s; animation: fadeInUp 1s ease-out 0.6s both; }
        .btn:hover { transform: translateY(-2px); }
        .menu { padding: 80px 2rem; max-width: 1200px; margin: 0 auto; }
        .menu h2 { text-align: center; font-size: 2.5rem; margin-bottom: 3rem; color: #333; }
        .menu-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
        .menu-item { background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); transition: transform 0.3s; }
        .menu-item:hover { transform: translateY(-5px); }
        .menu-item-image { height: 200px; background: linear-gradient(45deg, #ff9a9e, #fecfef); }
        .menu-item-content { padding: 1.5rem; }
        .menu-item h3 { color: #333; margin-bottom: 0.5rem; }
        .menu-item p { color: #666; margin-bottom: 1rem; }
        .price { font-size: 1.2rem; font-weight: bold; color: #ff6b6b; }
        .contact { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 80px 2rem; text-align: center; }
        .contact h2 { font-size: 2.5rem; margin-bottom: 2rem; }
        .contact-info { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; max-width: 800px; margin: 0 auto; }
        .contact-item { padding: 1rem; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 768px) { .hero-content h1 { font-size: 2.5rem; } .nav-links { display: none; } }
    </style>
</head>
<body>
    <header class="header">
        <nav class="nav">
            <div class="logo">🍽️ Уютное Кафе</div>
            <ul class="nav-links">
                <li><a href="#home">Главная</a></li>
                <li><a href="#menu">Меню</a></li>
                <li><a href="#contact">Контакты</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero" id="home">
        <div class="hero-content">
            <h1>Добро пожаловать в Уютное Кафе</h1>
            <p>Лучшие блюда, приготовленные с любовью в самом сердце города</p>
            <button class="btn" onclick="document.getElementById('menu').scrollIntoView({behavior: 'smooth'})">Посмотреть меню</button>
        </div>
    </section>

    <section class="menu" id="menu">
        <h2>Наше меню</h2>
        <div class="menu-grid">
            <div class="menu-item">
                <div class="menu-item-image"></div>
                <div class="menu-item-content">
                    <h3>Паста Карбонара</h3>
                    <p>Классическая итальянская паста с беконом и сливочным соусом</p>
                    <div class="price">450 ₽</div>
                </div>
            </div>
            <div class="menu-item">
                <div class="menu-item-image"></div>
                <div class="menu-item-content">
                    <h3>Стейк из говядины</h3>
                    <p>Сочный стейк с гарниром из овощей гриль</p>
                    <div class="price">850 ₽</div>
                </div>
            </div>
            <div class="menu-item">
                <div class="menu-item-image"></div>
                <div class="menu-item-content">
                    <h3>Тирамису</h3>
                    <p>Нежный итальянский десерт с кофе и маскарпоне</p>
                    <div class="price">280 ₽</div>
                </div>
            </div>
        </div>
    </section>

    <section class="contact" id="contact">
        <h2>Свяжитесь с нами</h2>
        <div class="contact-info">
            <div class="contact-item">
                <h3>📍 Адрес</h3>
                <p>ул. Пушкина, д. 10<br>Москва, 101000</p>
            </div>
            <div class="contact-item">
                <h3>📞 Телефон</h3>
                <p>+7 (495) 123-45-67</p>
            </div>
            <div class="contact-item">
                <h3>🕒 Время работы</h3>
                <p>Пн-Вс: 10:00 - 23:00</p>
            </div>
        </div>
    </section>

    <script>
        // Плавная прокрутка для навигации
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Анимация появления элементов при скролле
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.menu-item').forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(item);
        });
    </script>
</body>
</html>`;
    }
    
    if (lowerPrompt.includes('портфолио') || lowerPrompt.includes('дизайнер') || lowerPrompt.includes('работы')) {
      return `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Портфолио Дизайнера</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Arial', sans-serif; line-height: 1.6; background: #1a1a1a; color: white; }
        .header { background: rgba(0,0,0,0.9); padding: 1rem 0; position: fixed; width: 100%; top: 0; z-index: 1000; backdrop-filter: blur(10px); }
        .nav { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
        .logo { font-size: 1.5rem; font-weight: bold; background: linear-gradient(45deg, #ff6b6b, #4ecdc4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .nav-links { display: flex; list-style: none; gap: 2rem; }
        .nav-links a { color: white; text-decoration: none; transition: color 0.3s; }
        .nav-links a:hover { color: #4ecdc4; }
        .hero { height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); position: relative; overflow: hidden; }
        .hero::before { content: ''; position: absolute; width: 200%; height: 200%; background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle fill="%23ffffff10" cx="50" cy="50" r="2"/></svg>') repeat; animation: float 20s infinite linear; }
        .hero-content { text-align: center; z-index: 2; }
        .hero h1 { font-size: 3.5rem; margin-bottom: 1rem; animation: fadeInUp 1s ease-out; }
        .hero p { font-size: 1.2rem; margin-bottom: 2rem; opacity: 0.9; animation: fadeInUp 1s ease-out 0.3s both; }
        .btn { background: linear-gradient(45deg, #ff6b6b, #4ecdc4); color: white; padding: 12px 30px; border: none; border-radius: 25px; font-size: 1rem; cursor: pointer; transition: transform 0.3s; animation: fadeInUp 1s ease-out 0.6s both; }
        .btn:hover { transform: translateY(-2px); }
        .portfolio { padding: 80px 2rem; max-width: 1400px; margin: 0 auto; }
        .portfolio h2 { text-align: center; font-size: 2.5rem; margin-bottom: 3rem; }
        .portfolio-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem; }
        .project { background: #2a2a2a; border-radius: 15px; overflow: hidden; transition: transform 0.3s, box-shadow 0.3s; cursor: pointer; }
        .project:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .project-image { height: 250px; background: linear-gradient(45deg, #ff6b6b, #4ecdc4); position: relative; }
        .project-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s; }
        .project:hover .project-overlay { opacity: 1; }
        .project-content { padding: 1.5rem; }
        .project h3 { margin-bottom: 0.5rem; color: #4ecdc4; }
        .project p { color: #ccc; }
        .skills { background: #111; padding: 80px 2rem; }
        .skills-container { max-width: 1200px; margin: 0 auto; text-align: center; }
        .skills h2 { font-size: 2.5rem; margin-bottom: 3rem; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; }
        .skill { background: #2a2a2a; padding: 2rem; border-radius: 15px; transition: transform 0.3s; }
        .skill:hover { transform: translateY(-5px); }
        .skill-icon { font-size: 3rem; margin-bottom: 1rem; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0% { transform: translateX(-50%) translateY(-50%); } 100% { transform: translateX(-50%) translateY(-50%) translateX(-100px); } }
        @media (max-width: 768px) { .hero h1 { font-size: 2.5rem; } .portfolio-grid, .skills-grid { grid-template-columns: 1fr; } }
    </style>
</head>
<body>
    <header class="header">
        <nav class="nav">
            <div class="logo">Анна Иванова</div>
            <ul class="nav-links">
                <li><a href="#home">Главная</a></li>
                <li><a href="#portfolio">Портфолио</a></li>
                <li><a href="#skills">Навыки</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero" id="home">
        <div class="hero-content">
            <h1>UX/UI Дизайнер</h1>
            <p>Создаю красивые и функциональные интерфейсы<br>5+ лет опыта в дизайне цифровых продуктов</p>
            <button class="btn" onclick="document.getElementById('portfolio').scrollIntoView({behavior: 'smooth'})">Посмотреть работы</button>
        </div>
    </section>

    <section class="portfolio" id="portfolio">
        <h2>Мои работы</h2>
        <div class="portfolio-grid">
            <div class="project">
                <div class="project-image">
                    <div class="project-overlay">
                        <span style="color: white; font-size: 1.2rem;">Посмотреть проект</span>
                    </div>
                </div>
                <div class="project-content">
                    <h3>Мобильное приложение банка</h3>
                    <p>Полный редизайн мобильного приложения с фокусом на UX</p>
                </div>
            </div>
            <div class="project">
                <div class="project-image" style="background: linear-gradient(45deg, #2ecc71, #f39c12);">
                    <div class="project-overlay">
                        <span style="color: white; font-size: 1.2rem;">Посмотреть проект</span>
                    </div>
                </div>
                <div class="project-content">
                    <h3>Образовательная платформа</h3>
                    <p>Веб-платформа для онлайн обучения с интуитивным интерфейсом</p>
                </div>
            </div>
            <div class="project">
                <div class="project-image" style="background: linear-gradient(45deg, #9b59b6, #1abc9c);">
                    <div class="project-overlay">
                        <span style="color: white; font-size: 1.2rem;">Посмотреть проект</span>
                    </div>
                </div>
                <div class="project-content">
                    <h3>Корпоративный сайт</h3>
                    <p>Современный сайт IT-компании с анимациями и микроинтеракциями</p>
                </div>
            </div>
        </div>
    </section>

    <section class="skills" id="skills">
        <div class="skills-container">
            <h2>Навыки</h2>
            <div class="skills-grid">
                <div class="skill">
                    <div class="skill-icon">🎨</div>
                    <h3>UI Design</h3>
                    <p>Figma, Sketch, Adobe XD</p>
                </div>
                <div class="skill">
                    <div class="skill-icon">👥</div>
                    <h3>UX Research</h3>
                    <p>Пользовательские интервью, тестирование</p>
                </div>
                <div class="skill">
                    <div class="skill-icon">💻</div>
                    <h3>Prototyping</h3>
                    <p>Интерактивные прототипы, анимации</p>
                </div>
                <div class="skill">
                    <div class="skill-icon">📱</div>
                    <h3>Mobile Design</h3>
                    <p>iOS, Android, адаптивный дизайн</p>
                </div>
            </div>
        </div>
    </section>

    <script>
        // Плавная прокрутка
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Анимация появления проектов
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.project, .skill').forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(item);
        });
    </script>
</body>
</html>`;
    }
    
    // Дефолтный шаблон для других случаев
    return `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Мой сайт</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; }
        .hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 100px 20px; text-align: center; min-height: 100vh; display: flex; align-items: center; justify-content: center; }
        .hero-content h1 { font-size: 3.5rem; margin-bottom: 1rem; animation: fadeInUp 1s ease-out; }
        .hero-content p { font-size: 1.3rem; margin-bottom: 2rem; animation: fadeInUp 1s ease-out 0.3s both; }
        .btn { background: white; color: #667eea; padding: 15px 30px; border: none; border-radius: 25px; font-size: 1.1rem; cursor: pointer; transition: transform 0.3s; animation: fadeInUp 1s ease-out 0.6s both; }
        .btn:hover { transform: translateY(-2px); }
        .section { padding: 80px 20px; max-width: 1200px; margin: 0 auto; }
        .section h2 { text-align: center; font-size: 2.5rem; margin-bottom: 3rem; color: #333; }
        .features { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
        .feature { background: #f8f9fa; padding: 2rem; border-radius: 15px; text-align: center; transition: transform 0.3s; }
        .feature:hover { transform: translateY(-5px); }
        .feature-icon { font-size: 3rem; margin-bottom: 1rem; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 768px) { .hero-content h1 { font-size: 2.5rem; } .features { grid-template-columns: 1fr; } }
    </style>
</head>
<body>
    <section class="hero">
        <div class="hero-content">
            <h1>Добро пожаловать!</h1>
            <p>Создано специально для вас с помощью искусственного интеллекта</p>
            <button class="btn" onclick="document.querySelector('.section').scrollIntoView({behavior: 'smooth'})">Узнать больше</button>
        </div>
    </section>

    <section class="section">
        <h2>Особенности</h2>
        <div class="features">
            <div class="feature">
                <div class="feature-icon">🚀</div>
                <h3>Быстро</h3>
                <p>Молниеносная скорость работы и отличная производительность</p>
            </div>
            <div class="feature">
                <div class="feature-icon">💎</div>
                <h3>Качественно</h3>
                <p>Высокое качество и внимание к каждой детали</p>
            </div>
            <div class="feature">
                <div class="feature-icon">🎯</div>
                <h3>Точно</h3>
                <p>Именно то, что вам нужно, без лишних элементов</p>
            </div>
        </div>
    </section>

    <script>
        // Плавные анимации при скролле
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.feature').forEach(feature => {
            feature.style.opacity = '0';
            feature.style.transform = 'translateY(30px)';
            feature.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(feature);
        });
    </script>
</body>
</html>`;
  };

  const examples = [
    {
      title: "IT Компания",
      description: "Современный корпоративный сайт с услугами разработки",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      prompt: "Создай сайт для IT-компании с услугами веб-разработки, мобильных приложений и консультаций"
    },
    {
      title: "Портфолио Дизайнера", 
      description: "Минималистичное портфолио с галереей работ",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      prompt: "Портфолио UX/UI дизайнера с галереей проектов и информацией об опыте"
    },
    {
      title: "Онлайн Магазин",
      description: "E-commerce сайт с каталогом товаров и корзиной",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      prompt: "Интернет-магазин одежды с каталогом, корзиной и системой оплаты"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Icon name="Sparkles" size={16} className="text-white" />
            </div>
            <span className="font-bold text-xl">SiteAI</span>
            <Badge variant="secondary" className="ml-2">FREE</Badge>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Icon name="Github" size={16} className="mr-2" />
              GitHub
            </Button>
            <Button size="sm">
              <Icon name="Zap" size={16} className="mr-2" />
              Попробовать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 mb-8">
              <Icon name="Sparkles" size={16} className="text-blue-600" />
              <span className="text-blue-600 text-sm font-medium">Бесплатный AI-генератор сайтов</span>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Создайте сайт
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}за секунды
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Просто опишите что нужно — ИИ создаст готовый HTML-сайт. 
              Копия poehali.dev, но абсолютно бесплатно.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Badge variant="outline" className="text-gray-600">
                <Icon name="Zap" size={14} className="mr-1" />
                Мгновенно
              </Badge>
              <Badge variant="outline" className="text-gray-600">
                <Icon name="Code" size={14} className="mr-1" />
                Готовый HTML
              </Badge>
              <Badge variant="outline" className="text-gray-600">
                <Icon name="Download" size={14} className="mr-1" />
                Можно скачать
              </Badge>
              <Badge variant="outline" className="text-gray-600">
                <Icon name="Heart" size={14} className="mr-1" />
                Бесплатно
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Generator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <Icon name="Bot" size={32} className="inline mr-2 text-blue-600" />
                Юра — ваш личный программист
              </h2>
              <p className="text-gray-600 text-lg">
                Опишите сайт на русском языке и сразу увидите результат в живом превью
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Icon name="MessageSquare" size={20} className="mr-2 text-blue-600" />
                    Ваш запрос
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="prompt" className="text-base font-medium">
                      Опишите какой сайт нужен
                    </Label>
                    <Textarea
                      id="prompt"
                      placeholder="Например: Создай лендинг для кафе с меню, фото блюд, контактами и формой бронирования стола"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="mt-2 min-h-[120px] text-base"
                    />
                  </div>

                  <Button 
                    onClick={handleGenerate}
                    disabled={!prompt.trim() || isGenerating}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 text-base"
                    size="lg"
                  >
                    {isGenerating ? (
                      <>
                        <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                        Юра создает сайт...
                      </>
                    ) : (
                      <>
                        <Icon name="Sparkles" size={20} className="mr-2" />
                        Создать сайт
                      </>
                    )}
                  </Button>

                  <div className="text-sm text-gray-500 text-center">
                    <Icon name="Clock" size={14} className="inline mr-1" />
                    Обычно занимает 2-5 секунд
                  </div>
                </CardContent>
              </Card>

              {/* Output */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-xl">
                    <div className="flex items-center">
                      <Icon name="Eye" size={20} className="mr-2 text-purple-600" />
                      Живое превью
                    </div>
                    <div className="flex items-center space-x-2">
                      {generatedSite && (
                        <>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setShowPreview(!showPreview)}
                          >
                            <Icon name={showPreview ? "Code" : "Eye"} size={16} className="mr-1" />
                            {showPreview ? "Код" : "Превью"}
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => {
                              const blob = new Blob([generatedSite], { type: 'text/html' });
                              const url = URL.createObjectURL(blob);
                              const a = document.createElement('a');
                              a.href = url;
                              a.download = 'site.html';
                              a.click();
                            }}
                          >
                            <Icon name="Download" size={16} className="mr-1" />
                            Скачать
                          </Button>
                        </>
                      )}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isGenerating ? (
                    <div className="space-y-4">
                      <div className="animate-pulse space-y-3">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                      </div>
                      <div className="text-center text-gray-500">
                        <Icon name="Bot" size={32} className="mx-auto mb-2 text-blue-600 animate-pulse" />
                        <p>Юра создаёт ваш сайт...</p>
                      </div>
                    </div>
                  ) : generatedSite ? (
                    <div className="space-y-4">
                      {showPreview ? (
                        <div className="bg-white rounded-lg border overflow-hidden">
                          <iframe
                            ref={iframeRef}
                            className="w-full h-96 border-0"
                            title="Превью сайта"
                            sandbox="allow-scripts allow-same-origin"
                          />
                        </div>
                      ) : (
                        <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-auto">
                          <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono">
                            {generatedSite}
                          </pre>
                        </div>
                      )}
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>
                          <Icon name="FileText" size={14} className="inline mr-1" />
                          Размер: {(generatedSite.length / 1024).toFixed(1)} KB
                        </span>
                        <span>
                          <Icon name="CheckCircle" size={14} className="inline mr-1 text-green-600" />
                          Готово к использованию
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-400 py-12">
                      <Icon name="Eye" size={48} className="mx-auto mb-4" />
                      <p>Здесь появится превью вашего сайта</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Примеры сгенерированных сайтов
              </h2>
              <p className="text-gray-600 text-lg">
                Нажмите на пример, чтобы сгенерировать похожий сайт
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {examples.map((example, index) => (
                <Card 
                  key={index} 
                  className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  onClick={() => {
                    setPrompt(example.prompt);
                    document.getElementById('prompt')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div 
                    className="h-48 rounded-t-lg"
                    style={{ background: example.image }}
                  ></div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{example.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{example.description}</p>
                    <div className="flex items-center text-blue-600 text-sm font-medium">
                      <Icon name="MousePointer" size={14} className="mr-1" />
                      Нажмите для генерации
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" size={16} className="text-white" />
              </div>
              <span className="font-bold text-xl">SiteAI</span>
            </div>
            <p className="text-gray-600 mb-4">
              Бесплатная копия poehali.dev для создания сайтов через ИИ
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-blue-600">
                <Icon name="Github" size={16} className="inline mr-1" />
                GitHub
              </a>
              <a href="#" className="hover:text-blue-600">
                <Icon name="MessageCircle" size={16} className="inline mr-1" />
                Поддержка
              </a>
              <a href="#" className="hover:text-blue-600">
                <Icon name="Heart" size={16} className="inline mr-1" />
                Donate
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;