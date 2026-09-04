import type { Recommendation, Situation } from '../types'

export function getRecommendedActions(situations: Situation[]): Recommendation[] {
  return situations.slice(0, 3).map((item, index) => ({
    id: `${item.id}-${index}`,
    title: item.name,
    description:
      index === 0
        ? 'Lead with empathy and clarify the next immediate action.'
        : index === 1
          ? 'Align the team around a smaller win and reduce friction.'
          : 'Formalize the follow-up so momentum stays high.',
    impact: item.buck,
    priority: index === 0 ? 'High' : index === 1 ? 'Medium' : 'Low',
  }))
}

export function generateNextActions(situationId?: string): string[] {
  if (!situationId) {
    return ['ระบุข้อมูลเพิ่มเติม', 'ลองวิเคราะห์ใหม่อีกครั้ง']
  }

  if (situationId.includes('legal') || situationId.includes('90') || situationId.includes('61') || situationId.includes('terminate')) {
    return [
      'แจ้งเตือนสถานะบัญชีเร่งด่วน',
      'อธิบายผลกระทบหากเข้าสู่กฎหมาย (ขายทอดตลาด + ส่วนต่าง)',
      'เสนอทางเลือกชำระบางส่วนเพื่อระงับเรื่อง',
      'Confirm วันชำระเร่งด่วน',
      'ระงับเรื่องก่อนส่งฝ่ายกฎหมาย',
    ]
  }

  if (situationId.includes('return') || situationId.includes('want-return')) {
    return [
      'อธิบายภาระหนี้หลังคืนรถ (ส่วนต่างขายทอดตลาด)',
      'ชี้แจงว่าคืนรถ ≠ หมดหนี้',
      'เสนอทางเลือกผ่อนต่อ / โอนสิทธิ์',
      'Confirm แนวทางที่ลูกค้าเลือก',
    ]
  }

  if (situationId.includes('proxy') || situationId.includes('car-relative')) {
    return [
      'ยืนยันความรับผิดชอบตามสัญญา (ผู้เช่าซื้อ/ผู้ค้ำ)',
      'แนะนำให้ "สำรองจ่าย" เพื่อเซฟตัวเอง',
      'ประสานงานกับคนใช้รถ',
      'Confirm วันชำระ',
    ]
  }

  if (situationId.includes('lies') || situationId.includes('false')) {
    return [
      'แจ้งว่าระบบยังไม่พบยอด (โยนไปที่ระบบ)',
      'ขอสลิป/หลักฐานการโอน',
      'แนะนำให้ชำระตามที่ตกลง',
      'Confirm วันชำระ',
    ]
  }

  if (situationId.includes('fee') || situationId.includes('complaint')) {
    return [
      'ชี้แจงตามสัญญาอย่างสุภาพและนิ่ง',
      'เน้น "หยุดค่าใช้จ่าย" แทนการโต้เถียง',
      'เสนอชำระเพื่อปิดเรื่อง',
      'Confirm วันชำระ',
    ]
  }

  return [
    'เข้าใจปัญหา (Empathy)',
    'ถามวันที่คาดว่าจะมีเงิน',
    'เสนอวันชำระ',
    'Confirm Promise to Pay',
    'บันทึกผล',
  ]
}
