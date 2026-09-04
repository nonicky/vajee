import type { Buck, MagicWord, Occupation, PopularSituation, Situation } from '../types'

export const magicWords: MagicWord[] = [
  { id: 'mw-001', situationId: 'sit-new-defer', buck: 'Overdue 1-30 Days', occupation: 'ข้าราชการ', situation: 'ลูกค้าใหม่ ไม่เคยมีประวัติค้างชำระ (ขอเลื่อนการชำระ)', variant: 'original', text: 'เนื่องจากลูกค้าเป็นลูกค้าใหม่ ทางเราจึงอยากให้ลูกค้ารักษาประวัติการชำระที่ดีเพื่อสิทธิ์พิเศษสำหรับเข้าร่วมโครงการของบริษัทในอนาคต', goal: 'รักษาประวัติที่ดีของลูกค้าใหม่และรักษาสิทธิพิเศษในอนาคต' },
  { id: 'mw-002', situationId: 'sit-new-defer', buck: 'Overdue 1-30 Days', occupation: 'ข้าราชการ', situation: 'ลูกค้าใหม่ ไม่เคยมีประวัติค้างชำระ (ขอเลื่อนการชำระ)', variant: '1', text: 'เพื่อรักษาประวัติที่ดีของลูกค้าใหม่และรักษาสิทธิพิเศษในอนาคต แนะนำให้พยายามชำระเข้ามาตามกำหนดก่อนนะคะ' },
  { id: 'mw-003', situationId: 'sit-new-defer', buck: 'Overdue 1-30 Days', occupation: 'ข้าราชการ', situation: 'ลูกค้าใหม่ ไม่เคยมีประวัติค้างชำระ (ขอเลื่อนการชำระ)', variant: '3', text: 'แนะนำชำระตรงกำหนดเพื่อไม่ให้เสียสิทธิ์ลูกค้าใหม่ในอนาคตค่ะ', closingQuestion: 'สะดวกชำระวันนี้หรือพรุ่งนี้ดีคะ' },
  { id: 'mw-004', situationId: 'sit-new-partial', buck: 'Overdue 1-30 Days', occupation: 'ข้าราชการ', situation: 'ลูกค้าใหม่ ไม่เคยมีประวัติค้างชำระ (ขอจ่ายยอดบางส่วน)', variant: 'original', text: 'บริษัทเข้าใจสถานการณ์ค่ะ แต่การจ่ายยอดบางส่วนไม่สามารถหยุดอายุหนี้และเบี้ยปรับรายวันได้ แนะนำชำระยอดค้างทั้งหมดค่ะ' },
  { id: 'mw-005', situationId: 'sit-new-partial', buck: 'Overdue 1-30 Days', occupation: 'ข้าราชการ', situation: 'ลูกค้าใหม่ ไม่เคยมีประวัติค้างชำระ (ขอจ่ายยอดบางส่วน)', variant: '1', text: 'เพื่อให้บัญชีกลับมาเป็นปกติและไม่ต้องเสียค่าปรับเพิ่มทุกวัน แนะนำให้ชำระยอดค้างทั้งหมดทีเดียวค่ะ' },
  { id: 'mw-006', situationId: 'sit-new-partial', buck: 'Overdue 1-30 Days', occupation: 'ข้าราชการ', situation: 'ลูกค้าใหม่ ไม่เคยมีประวัติค้างชำระ (ขอจ่ายยอดบางส่วน)', variant: '3', text: 'เพื่อหยุดอายุหนี้และเบี้ยปรับรายวัน แนะนำชำระยอดค้างทั้งหมดนะคะ', closingQuestion: 'สะดวกยอดนี้เป็นวันนี้เลยไหมคะ' },
  { id: 'mw-007', situationId: 'sit-waiting-money', buck: 'Overdue 1-30 Days', occupation: 'ข้าราชการ', situation: 'ลูกค้าแจ้งรอเงิน จากแหล่งที่มาอื่น รอเงินกู้ รอเงินจากลูกค้า', variant: 'original', text: 'ลองพยายามชำระตามกำหนดก่อนนะคะ เพราะหากปล่อยไว้นานจะเกิดค่าติดตามและเบี้ยปรับรายวัน' },
  { id: 'mw-008', situationId: 'sit-waiting-money', buck: 'Overdue 1-30 Days', occupation: 'ข้าราชการ', situation: 'ลูกค้าแจ้งรอเงิน จากแหล่งที่มาอื่น รอเงินกู้ รอเงินจากลูกค้า', variant: '3', text: 'แนะนำชำระตามกำหนดเพื่อเลี่ยงค่าติดตามและเบี้ยปรับรายวันค่ะ', closingQuestion: 'สะดวกโอนช่วงเช้าหรือบ่ายดีคะ' },
  { id: 'mw-009', situationId: 'sit-used-elsewhere', buck: 'Overdue 1-30 Days', occupation: 'ข้าราชการ', situation: 'ลูกค้าต้องนำเงินไปใช้จ่ายในส่วนอื่น', variant: 'original', text: 'บริษัทเข้าใจปัญหาของลูกค้า แต่อยากให้พยายามแก้ไขไปพร้อมกัน เพื่อป้องกันประวัติเสีย ค่าติดตาม และค่าปรับรายวัน' },
  { id: 'mw-010', situationId: 'sit-used-elsewhere', buck: 'Overdue 1-30 Days', occupation: 'ข้าราชการ', situation: 'ลูกค้าต้องนำเงินไปใช้จ่ายในส่วนอื่น', variant: '3', text: 'เพื่อหยุดค่าปรับรายวันและรักษาประวัติ แนะนำพยายามชำระเข้ามาก่อนค่ะ', closingQuestion: 'สะดวกชำระช่วงเช้าหรือบ่ายดีคะ' },
  { id: 'mw-011', situationId: 'sit-false-payment', buck: 'Overdue 1-30 Days', occupation: 'ข้าราชการ', situation: 'ลูกค้าแจ้งจ่ายเท็จ/ถึงวันนัดแล้วไม่จ่าย', variant: 'original', text: 'การไม่ชำระตามที่ตกลงไว้จะส่งผลต่อประวัติการชำระและสิทธิพิเศษต่างๆ ในอนาคตค่ะ' },
  { id: 'mw-012', situationId: 'sit-false-payment', buck: 'Overdue 1-30 Days', occupation: 'ข้าราชการ', situation: 'ลูกค้าแจ้งจ่ายเท็จ/ถึงวันนัดแล้วไม่จ่าย', variant: '3', text: 'หากไม่ชำระตามนัดจะกระทบประวัติโดยตรงนะคะ', closingQuestion: 'สะดวกชำระวันนี้เลยไหมคะ' },
  { id: 'mw-013', situationId: 'sit-customer-lies', buck: 'Overdue 1-30 Days', occupation: 'ข้าราชการ', situation: 'ลูกค้าชอบโกหกว่าจ่ายแล้ว', variant: 'original', text: 'ตรวจสอบแล้วยังไม่พบยอดค่ะ หากชำระแล้วรบกวนส่งสลิปหรือหลักฐานให้เจ้าหน้าที่ตรวจสอบได้เลยค่ะ', tips: ['ใช้คำว่า "ส่งสลิป/หลักฐาน" แทนการถามเฉยๆ', 'โยนความผิดไปที่ระบบ'], avoid: ['ใช้คำว่า "ลูกค้าโกหก"', 'ใช้คำว่า "ลูกค้าจำผิด"'] },
  { id: 'mw-014', situationId: 'sit-customer-lies', buck: 'Overdue 1-30 Days', occupation: 'ข้าราชการ', situation: 'ลูกค้าชอบโกหกว่าจ่ายแล้ว', variant: '3', text: 'ตอนนี้ระบบยังไม่มียอดชำระเข้ามานะคะ หากชำระแล้วสามารถส่งสลิปยืนยันได้เลยค่ะ' },
  { id: 'mw-015', situationId: 'sit-return-car', buck: 'Overdue 1-30 Days', occupation: 'ข้าราชการ', situation: 'ลค.ขอคืนรถ', variant: 'original', text: 'การคืนรถไม่ได้ทำให้หนี้หมดไป และส่วนต่างหลังขายทอดตลาดยังต้องชำระตามเงื่อนไขสัญญาค่ะ', tips: ['เน้นหนี้ส่วนต่างหลังขายทอดตลาด', 'เน้นการรักษาประวัติที่ดี'] },
  { id: 'mw-016', situationId: 'sit-return-car', buck: 'Overdue 1-30 Days', occupation: 'ข้าราชการ', situation: 'ลค.ขอคืนรถ', variant: '3', text: 'แนะนำชำระเข้ามาเพื่อเคลียร์บัญชีให้ปกติและได้ใช้รถต่อคุ้มกว่าค่ะ', closingQuestion: 'สะดวกโอนชำระตอนนี้เลยไหมคะ' },
  { id: 'mw-017', situationId: 'sit-proxy-buyer', buck: 'Overdue 1-30 Days', occupation: 'ข้าราชการ', situation: 'เช่าซื้อแทนกัน ลูกค้าให้คนอื่นใช้รถ และปฏิเสธความรับผิดชอบ', variant: 'original', text: 'ลูกค้าในฐานะผู้เช่าซื้อหรือผู้ค้ำคือผู้รับผิดชอบชำระค่างวดตามสัญญา แม้ให้บุคคลอื่นใช้รถค่ะ' },
  { id: 'mw-018', situationId: 'sit-proxy-buyer', buck: 'Overdue 1-30 Days', occupation: 'ข้าราชการ', situation: 'เช่าซื้อแทนกัน ลูกค้าให้คนอื่นใช้รถ และปฏิเสธความรับผิดชอบ', variant: '3', text: 'สัญญายังผูกพันกับคุณลูกค้าโดยตรงค่ะ แนะนำสำรองจ่ายเข้ามาปรับสถานะก่อน', closingQuestion: 'สะดวกชำระวันนี้เลยไหมคะ' },
  { id: 'mw-100', situationId: 'sit-new-defer-31', buck: 'Overdue 31-120 Days', occupation: 'ข้าราชการ', situation: 'ลูกค้าใหม่ ไม่เคยมีประวัติค้างชำระ (ขอเลื่อนการชำระ)', variant: 'original', text: 'แนะนำให้ชำระค่างวดตามกำหนดเพื่อรักษาประวัติการผ่อน หากบัญชีเข้าสู่กระบวนการทางกฎหมายอาจมีหนี้ส่วนต่างตามมา' },
  { id: 'mw-101', situationId: 'sit-new-defer-31', buck: 'Overdue 31-120 Days', occupation: 'ข้าราชการ', situation: 'ลูกค้าใหม่ ไม่เคยมีประวัติค้างชำระ (ขอเลื่อนการชำระ)', variant: '1', text: 'แนะนำชำระยอดวันนี้เพื่อรักษาประวัติเครดิตที่ดีและเลี่ยงหนี้ส่วนต่างหลังขายทอดตลาดค่ะ' },
  { id: 'mw-103', situationId: 'sit-61-terminate', buck: 'Overdue 31-120 Days', occupation: 'ข้าราชการ', situation: 'อายุหนี้มากกว่า 61 วัน (มีการออกหนังสือบอกเลิก)', variant: 'original', text: 'บัญชีอยู่ในขั้นตอนพิจารณายกเลิกสัญญา ลูกค้าสามารถชำระตามเงื่อนไขในหนังสือแจ้งภายในเวลาที่กำหนด' },
  { id: 'mw-105', situationId: 'sit-near-legal-90', buck: 'Overdue 31-120 Days', occupation: 'ข้าราชการ', situation: 'สถานะกำลังจะเข้าสู่ฝ่ายกฎหมายและนำรถกลับ (อายุหนี้ใกล้ 90 วัน)', variant: 'original', text: 'อายุหนี้ใกล้เข้าสู่ขั้นตอนทางกฎหมาย หากยังไม่ชำระอาจมีผลต่อการนำรถกลับและต้องชำระยอดค้างทั้งหมด' },
  { id: 'mw-106', situationId: 'sit-near-legal-90', buck: 'Overdue 31-120 Days', occupation: 'ข้าราชการ', situation: 'สถานะกำลังจะเข้าสู่ฝ่ายกฎหมายและนำรถกลับ (อายุหนี้ใกล้ 90 วัน)', variant: '1', text: 'แนะนำชำระยอดค้างวันนี้เพื่อระงับเรื่องและรักษาประวัติไว้ก่อนค่ะ', closingQuestion: 'สะดวกชำระวันนี้เลยไหมคะ' },
  { id: 'mw-107', situationId: 'sit-legal-consequence', buck: 'Overdue 31-120 Days', occupation: 'ข้าราชการ', situation: 'การแจ้งผลเสียเรื่องการติดตามนำรถกลับให้ลูกค้าทราบ', variant: 'original', text: 'หากไม่สามารถชำระตามเงื่อนไข บัญชีอาจถูกส่งฝ่ายกฎหมายและมีขั้นตอนติดตามรถคืนเพื่อขายทอดตลาด' },
  { id: 'mw-108', situationId: 'sit-legal-consequence', buck: 'Overdue 31-120 Days', occupation: 'ข้าราชการ', situation: 'การแจ้งผลเสียเรื่องการติดตามนำรถกลับให้ลูกค้าทราบ', variant: '1', text: 'หากมีส่วนต่างคุณลูกค้ายังต้องรับผิดชอบแม้ไม่มีรถใช้แล้ว แนะนำชำระเพื่อระงับเรื่องไว้ก่อนค่ะ' },
  { id: 'mw-109', situationId: 'sit-proxy-deny-90', buck: 'Overdue 31-120 Days', occupation: 'ข้าราชการ', situation: 'ผู้ซื้อปัดความรับผิดชอบ งานกำลังเข้าฝ่ายกฎหมาย (อายุหนี้ใกล้ 90 วัน)', variant: 'original', text: 'ตามสัญญา ผู้เช่าซื้อและผู้ค้ำประกันเป็นผู้รับผิดชอบหลัก และประวัติการชำระจะถูกบันทึกไว้ในชื่อทั้งสองฝ่าย' },
  { id: 'mw-110', situationId: 'sit-proxy-deny-90', buck: 'Overdue 31-120 Days', occupation: 'ข้าราชการ', situation: 'ผู้ซื้อปัดความรับผิดชอบ งานกำลังเข้าฝ่ายกฎหมาย (อายุหนี้ใกล้ 90 วัน)', variant: '1', text: 'เพื่อระงับเรื่องไม่ให้ส่งฝ่ายกฎหมาย แนะนำสำรองจ่ายเข้ามาวันนี้ก่อนแล้วค่อยประสานกับคนใช้รถค่ะ', closingQuestion: 'สะดวกชำระวันนี้ไหมคะ' },
]

export const allSituations: Situation[] = Array.from(
  new Map(
    magicWords.map((magicWord) => [
      `${magicWord.situationId}-${magicWord.buck}-${magicWord.occupation}`,
      {
        id: magicWord.situationId,
        name: magicWord.situation,
        buck: magicWord.buck,
        occupation: magicWord.occupation,
      },
    ]),
  ).values(),
)

export const allBucks: Buck[] = ['Overdue 1-30 Days', 'Overdue 31-120 Days']

export const allOccupations: Occupation[] = [
  'ข้าราชการ',
  'พนักงานบริษัท',
  'ค้าขาย',
  'เกษตรกร',
  'เจ้าของธุรกิจ',
]

export const popularSituations: PopularSituation[] = [
  {
    id: 'pop-defer',
    emoji: '📅',
    label: 'ขอเลื่อนชำระ',
    keywords: ['ขอเลื่อน', 'เลื่อนชำระ', 'เลื่อนไป', 'อาทิตย์หน้า', 'เดือนหน้า'],
    situationIds: ['sit-new-defer', 'sit-new-defer-31'],
  },
  {
    id: 'pop-no-money',
    emoji: '💰',
    label: 'ไม่มีเงิน',
    keywords: ['ไม่มีเงิน', 'เงินไม่พอ', 'ตกงาน', 'รายได้ไม่พอ'],
    situationIds: ['sit-used-elsewhere', 'sit-no-job'],
  },
  {
    id: 'pop-partial',
    emoji: '💳',
    label: 'ขอผ่อน/จ่ายบางส่วน',
    keywords: ['ขอผ่อน', 'จ่ายบางส่วน', 'จ่ายงวดละ'],
    situationIds: ['sit-new-partial', 'sit-pay-1-of-3'],
  },
  {
    id: 'pop-lies',
    emoji: '🤥',
    label: 'โกหกว่าจ่ายแล้ว',
    keywords: ['โกหก', 'จ่ายแล้ว', 'โอนแล้ว', 'ไม่พบยอด'],
    situationIds: ['sit-customer-lies', 'sit-false-payment'],
  },
  {
    id: 'pop-return',
    emoji: '🚗',
    label: 'ขอคืนรถ',
    keywords: ['คืนรถ', 'ไม่เอาแล้ว', 'ไม่ใช้รถ'],
    situationIds: ['sit-return-car', 'sit-return-car-31', 'sit-want-return'],
  },
  {
    id: 'pop-proxy',
    emoji: '👤',
    label: 'ให้คนอื่นใช้รถ',
    keywords: ['ให้คนอื่นใช้', 'ให้ญาติ', 'เช่าซื้อแทน', 'ปัดความรับผิดชอบ'],
    situationIds: ['sit-proxy-buyer', 'sit-car-relative', 'sit-proxy-deny-90'],
  },
  {
    id: 'pop-angry',
    emoji: '😡',
    label: 'ลูกค้าโกรธ/โวยวาย',
    keywords: ['โกรธ', 'โวยวาย', 'ไม่พอใจ', 'ด่า'],
    situationIds: ['sit-angry-refuse', 'sit-fee-complaint'],
  },
  {
    id: 'pop-legal',
    emoji: '⚖️',
    label: 'ใกล้เข้ากฎหมาย',
    keywords: ['กฎหมาย', '90 วัน', '61 วัน', 'บอกเลิก'],
    situationIds: ['sit-near-legal-90', 'sit-61-terminate', 'sit-legal-consequence'],
  },
]
