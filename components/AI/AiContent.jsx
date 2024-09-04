import React from 'react'
import { TextGenerateEffect } from '../ui/TextGenerateEffect'

export default function AiContent() {
  return (
    <div className="p-4 bg-[#131313] px-4">
        <h1 className="p-4 text-2xl"> תוכן</h1>
        <TextGenerateEffect duration={2} filter={false} words={'ברוכים הבאים ל-AIFusion – חדשנות עם AI! ההודעה הזו נוצרה באמצעות AI כדי להדגים את שירותינו. ב-AIFusion, אנו מביאים את הכוח של AI כדי לשפר את העסק שלכם. אנו מציעים פתרונות מותאמים אישית, ייעוץ מקצועי וטכנולוגיה חדשנית, הכל בשילוב חלק עם המערכות שלכם. רוצים לגלות איך AI יכול לחולל שינוי? צרו קשר עכשיו ונתאם ייעוץ חינמי!'} />
        </div>
  )
}
