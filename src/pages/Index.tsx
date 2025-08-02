import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [prompt, setPrompt] = useState('');
  const [brandName, setBrandName] = useState('');
  const [primaryColor, setPrimaryColor] = useState('#6366F1');
  const [secondaryColor, setSecondaryColor] = useState('#8B5CF6');
  const [websiteType, setWebsiteType] = useState('landing');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 3000);
  };

  const colorPalettes = [
    { name: 'Tech Blue', primary: '#6366F1', secondary: '#3B82F6' },
    { name: 'Purple Magic', primary: '#8B5CF6', secondary: '#A855F7' },
    { name: 'Ocean Teal', primary: '#06B6D4', secondary: '#0891B2' },
    { name: 'Emerald Green', primary: '#10B981', secondary: '#059669' },
    { name: 'Sunset Orange', primary: '#F97316', secondary: '#EA580C' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ai-indigo/20 to-ai-purple/20"></div>
        <div className="relative px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <Icon name="Sparkles" size={16} className="text-ai-indigo" />
              <span className="text-white text-sm font-medium">AI-генератор сайтов</span>
            </div>
            
            <h1 className="font-poppins text-4xl sm:text-6xl font-bold text-white mb-6">
              Создайте сайт
              <span className="bg-gradient-to-r from-ai-indigo to-ai-purple bg-clip-text text-transparent">
                {' '}мечты
              </span>
              <br />
              за секунды
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Просто опишите что хотите — наш ИИ создаст полноценный сайт 
              с вашим брендингом и цветовой схемой
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="outline" className="text-white border-white/20 bg-white/10">
                <Icon name="Zap" size={14} className="mr-1" />
                Быстро
              </Badge>
              <Badge variant="outline" className="text-white border-white/20 bg-white/10">
                <Icon name="Palette" size={14} className="mr-1" />
                Брендинг
              </Badge>
              <Badge variant="outline" className="text-white border-white/20 bg-white/10">
                <Icon name="Sparkles" size={14} className="mr-1" />
                AI-powered
              </Badge>
              <Badge variant="outline" className="text-white border-white/20 bg-white/10">
                <Icon name="Globe" size={14} className="mr-1" />
                Адаптивный
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* AI Generator Section */}
      <div className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Generator Form */}
            <Card className="bg-white/5 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="text-white font-poppins text-2xl flex items-center">
                  <Icon name="Bot" size={24} className="mr-2 text-ai-indigo" />
                  AI Генератор
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Website Description */}
                <div className="space-y-2">
                  <Label htmlFor="prompt" className="text-white font-medium">
                    Опишите ваш сайт
                  </Label>
                  <Textarea
                    id="prompt"
                    placeholder="Например: Современный лендинг для IT-компании с разделами о услугах, команде и контактах"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[100px]"
                  />
                </div>

                {/* Brand Settings */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="brand" className="text-white font-medium">
                      Название бренда
                    </Label>
                    <Input
                      id="brand"
                      placeholder="Ваш бренд"
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="type" className="text-white font-medium">
                      Тип сайта
                    </Label>
                    <Select value={websiteType} onValueChange={setWebsiteType}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="landing">Лендинг</SelectItem>
                        <SelectItem value="blog">Блог</SelectItem>
                        <SelectItem value="portfolio">Портфолио</SelectItem>
                        <SelectItem value="ecommerce">Магазин</SelectItem>
                        <SelectItem value="corporate">Корпоративный</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Color Scheme */}
                <div className="space-y-4">
                  <Label className="text-white font-medium">Цветовая схема</Label>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-gray-300 text-sm">Основной цвет</Label>
                      <div className="flex space-x-2">
                        <input
                          type="color"
                          value={primaryColor}
                          onChange={(e) => setPrimaryColor(e.target.value)}
                          className="w-12 h-10 rounded border-white/20 bg-transparent"
                        />
                        <Input
                          value={primaryColor}
                          onChange={(e) => setPrimaryColor(e.target.value)}
                          className="bg-white/10 border-white/20 text-white"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-gray-300 text-sm">Дополнительный</Label>
                      <div className="flex space-x-2">
                        <input
                          type="color"
                          value={secondaryColor}
                          onChange={(e) => setSecondaryColor(e.target.value)}
                          className="w-12 h-10 rounded border-white/20 bg-transparent"
                        />
                        <Input
                          value={secondaryColor}
                          onChange={(e) => setSecondaryColor(e.target.value)}
                          className="bg-white/10 border-white/20 text-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Color Palettes */}
                  <div className="space-y-2">
                    <Label className="text-gray-300 text-sm">Готовые палитры</Label>
                    <div className="flex flex-wrap gap-2">
                      {colorPalettes.map((palette) => (
                        <button
                          key={palette.name}
                          onClick={() => {
                            setPrimaryColor(palette.primary);
                            setSecondaryColor(palette.secondary);
                          }}
                          className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                        >
                          <div className="flex space-x-1">
                            <div 
                              className="w-4 h-4 rounded-full" 
                              style={{ backgroundColor: palette.primary }}
                            ></div>
                            <div 
                              className="w-4 h-4 rounded-full" 
                              style={{ backgroundColor: palette.secondary }}
                            ></div>
                          </div>
                          <span className="text-white text-sm">{palette.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Generate Button */}
                <Button 
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  className="w-full bg-gradient-to-r from-ai-indigo to-ai-purple hover:from-ai-indigo/80 hover:to-ai-purple/80 text-white font-medium py-3 text-lg"
                >
                  {isGenerating ? (
                    <>
                      <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                      Генерирую сайт...
                    </>
                  ) : (
                    <>
                      <Icon name="Sparkles" size={20} className="mr-2" />
                      Создать сайт
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Preview Section */}
            <Card className="bg-white/5 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="text-white font-poppins text-2xl flex items-center">
                  <Icon name="Eye" size={24} className="mr-2 text-ai-purple" />
                  Превью результата
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isGenerating ? (
                  <div className="space-y-4">
                    <div className="animate-pulse">
                      <div className="h-32 bg-gradient-to-r from-gray-300/20 to-gray-400/20 rounded-lg mb-4"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-300/20 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-300/20 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-300/20 rounded w-5/6"></div>
                      </div>
                    </div>
                    <div className="text-center text-white/70">
                      <Icon name="Sparkles" size={32} className="mx-auto mb-2 text-ai-indigo animate-pulse" />
                      <p>ИИ анализирует ваш запрос...</p>
                    </div>
                  </div>
                ) : prompt ? (
                  <div className="space-y-4">
                    {/* Mock Preview */}
                    <div 
                      className="h-32 rounded-lg relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${primaryColor}20, ${secondaryColor}20)`
                      }}
                    >
                      <div className="absolute inset-0 p-4">
                        <div 
                          className="w-20 h-8 rounded"
                          style={{ backgroundColor: primaryColor }}
                        ></div>
                        <div className="mt-4 space-y-2">
                          <div className="h-3 bg-white/40 rounded w-2/3"></div>
                          <div className="h-2 bg-white/30 rounded w-1/2"></div>
                        </div>
                        <div 
                          className="absolute bottom-4 right-4 w-16 h-6 rounded"
                          style={{ backgroundColor: secondaryColor }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="text-white space-y-2">
                      <h3 className="font-semibold">{brandName || 'Ваш бренд'}</h3>
                      <p className="text-sm text-gray-300 line-clamp-3">
                        {prompt}
                      </p>
                      <div className="flex items-center space-x-2 text-xs text-gray-400">
                        <Icon name="Palette" size={12} />
                        <span>Основной: {primaryColor}</span>
                        <span>•</span>
                        <span>Дополнительный: {secondaryColor}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-white/50 py-12">
                    <Icon name="FileText" size={48} className="mx-auto mb-4 text-gray-500" />
                    <p>Опишите ваш сайт, чтобы увидеть превью</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Features Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 backdrop-blur-lg border-white/10 text-center p-6">
              <div className="bg-gradient-to-r from-ai-indigo to-ai-purple w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <h3 className="text-white font-poppins font-semibold text-lg mb-2">
                Мгновенная генерация
              </h3>
              <p className="text-gray-300 text-sm">
                Создание сайта занимает секунды, не часы программирования
              </p>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 text-center p-6">
              <div className="bg-gradient-to-r from-ai-purple to-ai-indigo w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Palette" size={24} className="text-white" />
              </div>
              <h3 className="text-white font-poppins font-semibold text-lg mb-2">
                Брендинг и цвета
              </h3>
              <p className="text-gray-300 text-sm">
                Полная настройка под ваш бренд и корпоративные цвета
              </p>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 text-center p-6">
              <div className="bg-gradient-to-r from-ai-indigo to-ai-purple w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Smartphone" size={24} className="text-white" />
              </div>
              <h3 className="text-white font-poppins font-semibold text-lg mb-2">
                Адаптивный дизайн
              </h3>
              <p className="text-gray-300 text-sm">
                Сайт отлично выглядит на всех устройствах автоматически
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;