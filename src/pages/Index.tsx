import { useState } from 'react';
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

  const handleGenerate = () => {
    setIsGenerating(true);
    
    // Симуляция генерации сайта
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
      setIsGenerating(false);
    }, 2000);
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
                Опишите сайт на русском языке и получите готовый код
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
                      <Icon name="Code" size={20} className="mr-2 text-purple-600" />
                      Готовый код
                    </div>
                    {generatedSite && (
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
                    )}
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
                        <p>Юра пишет код для вашего сайта...</p>
                      </div>
                    </div>
                  ) : generatedSite ? (
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-auto">
                        <pre className="text-sm text-gray-800 whitespace-pre-wrap">
                          {generatedSite}
                        </pre>
                      </div>
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
                      <Icon name="FileText" size={48} className="mx-auto mb-4" />
                      <p>Здесь появится код вашего сайта</p>
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