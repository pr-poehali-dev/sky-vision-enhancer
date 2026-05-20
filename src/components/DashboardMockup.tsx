import type React from "react"
import { motion } from "framer-motion"
import {
  ChevronDown,
  ChevronRight,
  Search,
  Plus,
  MoreHorizontal,
  Settings,
  HelpCircle,
  Building2,
  Users,
  Wallet,
  LayoutGrid,
  Bell,
  Phone,
  MapPin,
  Star,
  Filter,
} from "lucide-react"

export function DashboardMockup() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  }

  const panelVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      y: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      className="w-full h-full bg-zinc-950 flex overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Sidebar */}
      <motion.div
        className="w-[220px] h-full bg-zinc-900/80 border-r border-zinc-800/50 flex flex-col shrink-0"
        variants={panelVariants}
      >
        {/* Logo */}
        <div className="p-3 border-b border-zinc-800/50">
          <div className="flex items-center gap-2 px-2 py-1.5">
            <Building2 className="w-5 h-5 text-indigo-400" />
            <span className="text-white font-semibold text-sm">LeadEstate</span>
            <ChevronDown className="w-3.5 h-3.5 text-zinc-500 ml-auto" />
          </div>
        </div>

        {/* Search */}
        <div className="p-3">
          <div className="flex items-center gap-2 px-2.5 py-1.5 bg-zinc-800/50 rounded-md text-zinc-500 text-xs">
            <Search className="w-3.5 h-3.5" />
            <span>Поиск лидов...</span>
            <span className="ml-auto text-[10px] bg-zinc-700/50 px-1.5 py-0.5 rounded">⌘K</span>
          </div>
        </div>

        {/* Main nav */}
        <div className="px-3 space-y-0.5">
          <NavItem icon={LayoutGrid} label="Маркет лидов" badge={47} active />
          <NavItem icon={Star} label="Мои лиды" />
          <NavItem icon={Bell} label="Уведомления" badge={3} />
        </div>

        {/* Workspace section */}
        <div className="mt-5 px-3">
          <div className="px-2 py-1 text-[10px] text-zinc-500 font-medium uppercase tracking-wider">
            Продукты
          </div>
          <div className="space-y-0.5 mt-1">
            <NavItem icon={Users} label="Готовые лиды" hasSubmenu />
            <NavItem icon={MapPin} label="Перехват" hasSubmenu />
            <NavItem icon={Phone} label="Звонки" hasSubmenu />
          </div>
        </div>

        {/* Favorites section */}
        <div className="mt-5 px-3">
          <div className="px-2 py-1 text-[10px] text-zinc-500 font-medium uppercase tracking-wider">
            Регионы
          </div>
          <div className="space-y-0.5 mt-1">
            <NavItem icon={MapPin} label="Москва" color="text-blue-400" />
            <NavItem icon={MapPin} label="Санкт-Петербург" color="text-orange-400" />
            <NavItem icon={MapPin} label="Краснодар" color="text-emerald-400" />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-auto px-3 space-y-0.5">
          <NavItem icon={Wallet} label="Баланс: 24 800 ₽" color="text-emerald-400" />
          <NavItem icon={Settings} label="Настройки" />
          <NavItem icon={HelpCircle} label="Помощь" />
        </div>
      </motion.div>

      {/* Lead List */}
      <motion.div
        className="w-[300px] h-full bg-zinc-900/40 border-r border-zinc-800/50 flex flex-col shrink-0"
        variants={panelVariants}
      >
        <div className="px-4 py-3 border-b border-zinc-800/50 flex items-center justify-between">
          <h3 className="text-white font-semibold text-sm">Маркет лидов</h3>
          <div className="flex items-center gap-2">
            <button className="text-zinc-500 hover:text-white transition-colors">
              <Filter className="w-3.5 h-3.5" />
            </button>
            <button className="text-zinc-500 hover:text-white transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto scrollbar-hide">
          <LeadItem
            id="L-2841"
            name="Алексей М."
            region="Москва, Новая Москва"
            budget="8 500 000 ₽"
            type="Новостройка"
            rooms="2-комн."
            price="2 900 ₽"
            isNew
            active
          />
          <LeadItem
            id="L-2840"
            name="Марина К."
            region="Москва, ЗАО"
            budget="15 000 000 ₽"
            type="Новостройка"
            rooms="3-комн."
            price="4 100 ₽"
            isExclusive
          />
          <LeadItem
            id="L-2839"
            name="Дмитрий С."
            region="Подмосковье"
            budget="6 200 000 ₽"
            type="Вторичка"
            rooms="1-комн."
            price="1 800 ₽"
          />
          <LeadItem
            id="L-2838"
            name="Ольга Н."
            region="Москва, ЦАО"
            budget="22 000 000 ₽"
            type="Новостройка"
            rooms="4-комн."
            price="6 500 ₽"
            isExclusive
          />
          <LeadItem
            id="L-2837"
            name="Виктор П."
            region="Москва, СВАО"
            budget="9 800 000 ₽"
            type="Ипотека"
            rooms="2-комн."
            price="2 400 ₽"
          />
          <LeadItem
            id="L-2836"
            name="Татьяна Р."
            region="Санкт-Петербург"
            budget="11 500 000 ₽"
            type="Новостройка"
            rooms="3-комн."
            price="3 200 ₽"
          />
        </div>
      </motion.div>

      {/* Detail Panel */}
      <motion.div className="flex-1 h-full bg-zinc-950 flex flex-col overflow-hidden" variants={panelVariants}>
        {/* Header breadcrumb */}
        <div className="px-5 py-3 border-b border-zinc-800/50 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-zinc-500">Маркет лидов</span>
            <span className="text-zinc-600">›</span>
            <span className="text-indigo-400">Москва, Новая Москва</span>
            <span className="text-zinc-600">›</span>
            <span className="text-zinc-300">L-2841</span>
          </div>
          <MoreHorizontal className="w-4 h-4 text-zinc-500" />
        </div>

        {/* Content */}
        <div className="flex-1 p-5 overflow-auto scrollbar-hide">
          {/* Lead card header */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-full">
                  Новый
                </span>
                <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full">Новостройка</span>
              </div>
              <h2 className="text-white text-xl font-semibold">Алексей М., 34 года</h2>
              <p className="text-zinc-500 text-xs mt-1">Добавлен сегодня в 10:42 · L-2841</p>
            </div>
            <div className="text-right">
              <p className="text-zinc-500 text-xs mb-1">Стоимость лида</p>
              <p className="text-white font-semibold text-lg">2 900 ₽</p>
            </div>
          </div>

          {/* Lead parameters */}
          <div className="bg-zinc-900/80 rounded-lg p-4 mb-4 border border-zinc-800/50 space-y-3">
            <h4 className="text-zinc-300 text-sm font-medium mb-3">Параметры клиента</h4>
            <LeadParam label="Регион" value="Москва, Новая Москва" />
            <LeadParam label="Бюджет" value="8 500 000 — 9 500 000 ₽" highlight />
            <LeadParam label="Тип сделки" value="Новостройка" />
            <LeadParam label="Комнатность" value="2-комнатная" />
            <LeadParam label="Способ оплаты" value="Ипотека (Сбербанк)" />
            <LeadParam label="Застройщики" value="ПИК, Самолёт, А101" />
            <LeadParam label="Срок покупки" value="1–2 месяца" />
          </div>

          {/* Audio preview */}
          <div className="bg-zinc-900/60 rounded-lg p-4 mb-4 border border-zinc-800/50">
            <div className="flex items-center justify-between mb-3">
              <span className="text-zinc-400 text-xs font-medium">Предварительный звонок</span>
              <span className="text-zinc-600 text-[10px]">1:24</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center shrink-0">
                <span className="text-white text-[10px] ml-0.5">▶</span>
              </button>
              <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-indigo-500 rounded-full" />
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            <button className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors">
              Купить лид — 2 900 ₽
            </button>
            <button className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm rounded-lg transition-colors border border-zinc-700">
              <Phone className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom meta */}
        <div className="border-t border-zinc-800/50 px-5 py-3 flex items-center gap-4 shrink-0">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-xs text-zinc-500">Обновляется в реальном времени</span>
          </div>
          <span className="text-xs text-zinc-600">·</span>
          <span className="text-xs text-zinc-500">+12 лидов сегодня</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

function NavItem({
  icon: Icon,
  label,
  badge,
  active,
  hasSubmenu,
  color,
}: {
  icon: React.ElementType
  label: string
  badge?: number
  active?: boolean
  hasSubmenu?: boolean
  color?: string
}) {
  return (
    <div
      className={`flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer text-xs transition-colors ${
        active ? "bg-zinc-800 text-white" : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
      }`}
    >
      <Icon className={`w-3.5 h-3.5 shrink-0 ${color || ""}`} />
      <span className="flex-1 truncate">{label}</span>
      {badge && (
        <span className="text-[10px] bg-indigo-600/80 text-white px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
          {badge}
        </span>
      )}
      {hasSubmenu && <ChevronRight className="w-3 h-3 text-zinc-600" />}
    </div>
  )
}

function LeadItem({
  id,
  name,
  region,
  budget,
  type,
  rooms,
  price,
  isNew,
  isExclusive,
  active,
}: {
  id: string
  name: string
  region: string
  budget: string
  type: string
  rooms: string
  price: string
  isNew?: boolean
  isExclusive?: boolean
  active?: boolean
}) {
  return (
    <div
      className={`px-4 py-3 border-b border-zinc-800/30 cursor-pointer transition-colors ${
        active ? "bg-zinc-800/60" : "hover:bg-zinc-800/30"
      }`}
    >
      <div className="flex items-start justify-between mb-1">
        <div className="flex items-center gap-1.5">
          <span className="text-zinc-500 text-[10px]">{id}</span>
          {isNew && <span className="text-[9px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded-full">Новый</span>}
          {isExclusive && <span className="text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded-full">Эксклюзив</span>}
        </div>
        <span className="text-zinc-300 text-xs font-medium">{price}</span>
      </div>
      <p className="text-zinc-200 text-sm font-medium truncate">{name}</p>
      <p className="text-zinc-500 text-[11px] truncate">{region} · {rooms} · {type}</p>
      <p className="text-zinc-600 text-[10px] mt-0.5">{budget}</p>
    </div>
  )
}

function LeadParam({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-zinc-500 text-xs">{label}</span>
      <span className={`text-xs font-medium ${highlight ? "text-indigo-300" : "text-zinc-300"}`}>{value}</span>
    </div>
  )
}
