import {
  faFacebook,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {
  faLifeRing,
  faSuitcaseMedical,
  faUsersCog,
} from '@fortawesome/free-solid-svg-icons'

export const SiteInfo = {
  title: 'حاويات الأنقاض ومخلفات البناء في جميع أنحاء جدة، ',
  description:
    'لتلبي كافه احتياجات الافراد والمؤسسات والشركات والمصانع والمقاولين',
  mobile: '+966553300829',
  whatsapp: 966553300829,
  email: '',
}
export const NavLinks = [
  {
    id: 1,
    title: 'الرئيسية',
    href: '/',
  },
  {
    id: 2,
    title: 'معلومات عنا',
    href: '/about',
  },
]
export const SocialLinks = [
  {
    id: 1,
    icon: faFacebook,
    href: '/',
    color: 'rgb(59 130 246)',
  },
  {
    id: 2,
    icon: faInstagram,
    href: '/',
    color: '#e4405f',
  },

  {
    id: 3,
    icon: faYoutube,
    href: '/',
    color: 'rgb(255 0 0)',
  },
]

export const WorkImages = [
  '/work/001.jpeg',
  '/work/002.jpeg',
  '/work/003.jpeg',
  '/work/004.jpeg',
  '/work/005.jpeg',
  '/work/006.jpeg',
  '/work/007.jpeg',
  '/work/008.jpeg',
  '/work/009.jpeg',
  '/work/010.jpeg',
  '/work/011.jpeg',
  '/work/012.jpeg',
  '/work/013.jpeg',
  '/work/014.jpeg',
  '/work/015.jpeg',
]

export const Experiences = [
  {
    id: 1,
    title: `خبرة 35عاما
`,
    description: `خبرة ودراية بمدى اهمية خدماتنا والتقدير لجودتنا`,
    icon: faUsersCog,
  },
  {
    id: 2,
    title: `تواصل سريع`,
    description: `نبلي خدماتكم على مدار الساعه والرد على الهاتف فوري`,
    icon: faLifeRing,
  },
  {
    id: 3,
    title: `عمل عالي الجودة
`,
    description: `نعتز بتقدم خدمات توصيل ذبائح بالكويت عالية الجودة
`,
    icon: faSuitcaseMedical,
  },
]
