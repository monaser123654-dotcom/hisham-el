// عدّل الروابط هنا فقط.
// CHAT_ENDPOINT: رابط workflow المساعد الذكي في n8n (بعد استيراد n8n/ilf-assistant.workflow.json وتفعيله).
// إن تركته فارغًا أو لم يعمل، يجيب المساعد من دليل المكتب المحلي مع توضيح ذلك للزائر.
window.CONFIG={
 // الفيديو التعريفي في "عن المؤسسة": حط الملف في مجلد img باسم intro.mp4 وهيظهر لوحده (لو مفيش ملف القسم بيختفي).
 // اختياري: youtube لرابط يوتيوب بدل الملف، أو file لاسم ملف مختلف مثل 'img/ilf.mp4'.
 INTRO_VIDEO:{file:'',youtube:'',poster:''},
 // Google Analytics 4: ضع معرّف القياس هنا مثل 'G-XXXXXXXXXX' (اتركه فارغًا لإيقاف التتبع)
 GA_ID:'',
 CHAT_ENDPOINT:'https://n8n.srv1908035.hstgr.cloud/webhook/ilf-assistant',
 // رابط احتياطي: يُجرَّب تلقائيًا إذا فشل الأول (الرابط القديم)
 CHAT_ENDPOINT_2:'https://n8n.srv1908035.hstgr.cloud/webhook/waha-webhook2',
 LEADS_ENDPOINT:'https://n8n.srv1908035.hstgr.cloud/webhook/ilf-assistant'
};
