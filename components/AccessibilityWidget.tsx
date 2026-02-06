'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  X, 
  Type, 
  Eye, 
  Contrast, 
  ZoomIn, 
  ZoomOut,
  RotateCcw,
  Minus,
  Plus
} from 'lucide-react';

interface AccessibilitySettings {
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  highContrast: boolean;
  grayscale: boolean;
  invertColors: boolean;
  hideImages: boolean;
  readableFont: boolean;
}

const DEFAULT_SETTINGS: AccessibilitySettings = {
  fontSize: 100,
  lineHeight: 100,
  letterSpacing: 100,
  highContrast: false,
  grayscale: false,
  invertColors: false,
  hideImages: false,
  readableFont: false,
};

const AccessibilityWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(DEFAULT_SETTINGS);

  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        setSettings(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load accessibility settings', e);
      }
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.fontSize = `${settings.fontSize}%`;
    root.style.setProperty('--line-height-multiplier', `${settings.lineHeight / 100}`);
    root.style.setProperty('--letter-spacing-multiplier', `${settings.letterSpacing / 100}`);
    
    if (settings.highContrast) root.classList.add('high-contrast');
    else root.classList.remove('high-contrast');
    
    if (settings.grayscale) root.classList.add('grayscale');
    else root.classList.remove('grayscale');
    
    if (settings.invertColors) root.classList.add('invert-colors');
    else root.classList.remove('invert-colors');
    
    if (settings.hideImages) root.classList.add('hide-images');
    else root.classList.remove('hide-images');
    
    if (settings.readableFont) root.classList.add('readable-font');
    else root.classList.remove('readable-font');
    
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
  };

  const adjustValue = (key: 'fontSize' | 'lineHeight' | 'letterSpacing', delta: number) => {
    setSettings(prev => ({
      ...prev,
      [key]: Math.max(50, Math.min(200, prev[key] + delta))
    }));
  };

  return (
    <>
      {/* Sticky Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-brick-700 hover:bg-brick-800 text-white p-4 rounded-l-2xl shadow-2xl transition-all hover:pr-6 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Ouvrir les paramètres d'accessibilité"
      >
        <Accessibility size={24} className="group-hover:rotate-12 transition-transform" />
      </motion.button>

      {/* Modal - No backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-brick-800 shadow-2xl z-[101] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-brick-900 text-white p-6 flex items-center justify-between z-10 border-b border-brick-700">
              <div className="flex items-center gap-3">
                <Accessibility size={24} />
                <div>
                  <h2 className="font-condensed font-bold text-lg uppercase tracking-wide">Accessibilité</h2>
                  <p className="text-brick-300 text-xs font-light">Personnalisez l&apos;affichage</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-brick-700 rounded-full transition-colors"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Font Size */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Type size={18} className="text-brick-300" />
                  <h3 className="font-condensed font-bold text-white uppercase text-xs tracking-wider">Taille du texte</h3>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <button
                    onClick={() => adjustValue('fontSize', -10)}
                    className="p-2 bg-brick-700 hover:bg-brick-600 rounded-lg transition-colors"
                    aria-label="Diminuer"
                  >
                    <Minus size={18} className="text-white" />
                  </button>
                  <div className="flex-1 text-center">
                    <span className="text-xl font-bold text-white">{settings.fontSize}%</span>
                  </div>
                  <button
                    onClick={() => adjustValue('fontSize', 10)}
                    className="p-2 bg-brick-700 hover:bg-brick-600 rounded-lg transition-colors"
                    aria-label="Augmenter"
                  >
                    <Plus size={18} className="text-white" />
                  </button>
                </div>
                <input
                  type="range"
                  min="50"
                  max="200"
                  step="10"
                  value={settings.fontSize}
                  onChange={(e) => updateSetting('fontSize', Number(e.target.value))}
                  className="w-full accent-brick-500"
                />
              </div>

              {/* Line Height */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <ZoomIn size={18} className="text-brick-300" />
                  <h3 className="font-condensed font-bold text-white uppercase text-xs tracking-wider">Hauteur de ligne</h3>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <button
                    onClick={() => adjustValue('lineHeight', -10)}
                    className="p-2 bg-brick-700 hover:bg-brick-600 rounded-lg transition-colors"
                    aria-label="Diminuer"
                  >
                    <Minus size={18} className="text-white" />
                  </button>
                  <div className="flex-1 text-center">
                    <span className="text-xl font-bold text-white">{settings.lineHeight}%</span>
                  </div>
                  <button
                    onClick={() => adjustValue('lineHeight', 10)}
                    className="p-2 bg-brick-700 hover:bg-brick-600 rounded-lg transition-colors"
                    aria-label="Augmenter"
                  >
                    <Plus size={18} className="text-white" />
                  </button>
                </div>
                <input
                  type="range"
                  min="50"
                  max="200"
                  step="10"
                  value={settings.lineHeight}
                  onChange={(e) => updateSetting('lineHeight', Number(e.target.value))}
                  className="w-full accent-brick-500"
                />
              </div>

              {/* Letter Spacing */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <ZoomOut size={18} className="text-brick-300" />
                  <h3 className="font-condensed font-bold text-white uppercase text-xs tracking-wider">Espacement lettres</h3>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <button
                    onClick={() => adjustValue('letterSpacing', -10)}
                    className="p-2 bg-brick-700 hover:bg-brick-600 rounded-lg transition-colors"
                    aria-label="Diminuer"
                  >
                    <Minus size={18} className="text-white" />
                  </button>
                  <div className="flex-1 text-center">
                    <span className="text-xl font-bold text-white">{settings.letterSpacing}%</span>
                  </div>
                  <button
                    onClick={() => adjustValue('letterSpacing', 10)}
                    className="p-2 bg-brick-700 hover:bg-brick-600 rounded-lg transition-colors"
                    aria-label="Augmenter"
                  >
                    <Plus size={18} className="text-white" />
                  </button>
                </div>
                <input
                  type="range"
                  min="50"
                  max="200"
                  step="10"
                  value={settings.letterSpacing}
                  onChange={(e) => updateSetting('letterSpacing', Number(e.target.value))}
                  className="w-full accent-brick-500"
                />
              </div>

              {/* Toggles */}
              <div className="space-y-3 pt-4 border-t border-brick-700">
                <ToggleOption
                  icon={<Contrast size={18} />}
                  label="Contraste élevé"
                  checked={settings.highContrast}
                  onChange={(checked) => updateSetting('highContrast', checked)}
                />
                <ToggleOption
                  icon={<Eye size={18} />}
                  label="Niveaux de gris"
                  checked={settings.grayscale}
                  onChange={(checked) => updateSetting('grayscale', checked)}
                />
                <ToggleOption
                  icon={<Contrast size={18} />}
                  label="Inverser couleurs"
                  checked={settings.invertColors}
                  onChange={(checked) => updateSetting('invertColors', checked)}
                />
                <ToggleOption
                  icon={<Eye size={18} />}
                  label="Masquer images"
                  checked={settings.hideImages}
                  onChange={(checked) => updateSetting('hideImages', checked)}
                />
                <ToggleOption
                  icon={<Type size={18} />}
                  label="Police lisible"
                  checked={settings.readableFont}
                  onChange={(checked) => updateSetting('readableFont', checked)}
                />
              </div>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full flex items-center justify-center gap-2 bg-brick-600 hover:bg-brick-500 text-white py-3 rounded-lg font-condensed font-bold uppercase tracking-wider transition-colors text-sm"
              >
                <RotateCcw size={18} />
                Réinitialiser
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ToggleOption: React.FC<{
  icon: React.ReactNode;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}> = ({ icon, label, checked, onChange }) => (
  <label className="flex items-center justify-between p-3 bg-brick-700 rounded-lg cursor-pointer hover:bg-brick-600 transition-colors">
    <div className="flex items-center gap-3">
      <div className="text-brick-300">{icon}</div>
      <span className="font-medium text-white text-sm">{label}</span>
    </div>
    <div className="relative">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <div className={`w-11 h-6 rounded-full transition-colors ${checked ? 'bg-brick-500' : 'bg-brick-800'}`}>
        <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${checked ? 'translate-x-5' : 'translate-x-0.5'} mt-0.5`} />
      </div>
    </div>
  </label>
);

export default AccessibilityWidget;
