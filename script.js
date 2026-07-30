  document.getElementById('year').textContent = new Date().getFullYear();

  // ===== i18n dictionary =====
  const translations = {
    nav_services: {en:"Services", hi:"सेवाएं"},
    nav_why: {en:"About Us", hi:"हमारे बारे में"},
    nav_process: {en:"How It Works", hi:"कैसे काम करता है"},
    nav_contact: {en:"Contact", hi:"संपर्क करें"},
    nav_renewal: {en:"Renewal Quote", hi:"रिन्यूअल कोटेशन"},
    nav_call: {en:"Call Now", hi:"कॉल करें"},
    nav_cta: {en:"Get Free Advice", hi:"मुफ़्त सलाह लें"},

    hero_eyebrow: {en:"IRDAI Authorized LIC Agent", hi:"IRDAI अधिकृत LIC एजेंट सेवा"},
    hero_h1: {en:'Protecting your family, your vehicle and your future — <em>all in one place</em>', hi:'आपके परिवार, वाहन और भविष्य—<em>तीनों की सुरक्षा</em> एक ही जगह'},
    hero_lead: {en:"Life insurance, vehicle insurance and pollution certificates (PUC) — get honest advice, easy paperwork and quick support at RS Life & General Insurance Center.", hi:"जीवन बीमा, वाहन बीमा और प्रदूषण प्रमाण पत्र (PUC)—RS Life & General Insurance Center पर सही सलाह, आसान कागज़ी कार्रवाई और तुरंत सहायता के साथ पाएं।"},
    hero_cta1: {en:"Get Free Advice", hi:"मुफ़्त सलाह के लिए संपर्क करें"},
    hero_cta2: {en:"View Services", hi:"सेवाएं देखें"},
    trust1: {en:"Authorized & trusted agent", hi:"अधिकृत व भरोसेमंद एजेंट"},
    trust2: {en:"Full claim support", hi:"क्लेम में पूरी सहायता"},
    trust3: {en:"Doorstep service", hi:"घर बैठे सेवा"},

    cg_life: {en:"Life", hi:"जीवन"},
    cg_vehicle: {en:"Vehicle", hi:"वाहन"},

    services_eyebrow: {en:"Our Services", hi:"हमारी सेवाएं"},
    services_h2: {en:"Three essential covers, one trusted place", hi:"तीन ज़रूरी सुरक्षा, एक भरोसेमंद जगह से"},
    services_p: {en:"Whether it's securing your family's future, protecting your vehicle, or handling environment-related paperwork — the RS team is with you at every step.", hi:"चाहे परिवार का भविष्य सुरक्षित करना हो, वाहन की सुरक्षा या पर्यावरण से जुड़ा दस्तावेज़—RS टीम हर कदम पर आपके साथ है।"},

    svc1_h3: {en:"Life Insurance (LIC Plans)", hi:"जीवन बीमा (LIC Plans)"},
    svc1_p: {en:"Complete guidance in choosing the right LIC policy for your family's needs.", hi:"आपके परिवार की ज़रूरत के अनुसार सही LIC पॉलिसी चुनने में पूरी मदद।"},
    svc1_li1: {en:"Term plans — high cover at low premium", hi:"टर्म प्लान — कम प्रीमियम में बड़ा सुरक्षा कवर"},
    svc1_li2: {en:"Endowment & savings plans", hi:"एंडोमेंट व बचत योजनाएं"},
    svc1_li3: {en:"Child education & marriage plans", hi:"बच्चों की शिक्षा व विवाह के लिए प्लान"},
    svc1_li4: {en:"Pension & retirement plans", hi:"पेंशन व रिटायरमेंट योजनाएं"},
    svc1_cta: {en:"Ask about life insurance", hi:"जीवन बीमा के बारे में पूछें"},

    svc2_h3: {en:"Vehicle Insurance", hi:"वाहन बीमा"},
    svc2_p: {en:"Quick renewal and new policy service for both bikes and cars.", hi:"बाइक और कार दोनों के लिए तुरंत रिन्यूअल और नई पॉलिसी सुविधा।"},
    svc2_li1: {en:"Two-wheeler & four-wheeler insurance", hi:"टू-व्हीलर व फोर-व्हीलर इंश्योरेंस"},
    svc2_li2: {en:"Third-party & comprehensive cover", hi:"थर्ड-पार्टी व कॉम्प्रिहेंसिव कवर"},
    svc2_li3: {en:"Policy renewal reminders", hi:"पॉलिसी रिन्यूअल रिमाइंडर"},
    svc2_li4: {en:"Help with filing claims", hi:"क्लेम फाइल करने में सहायता"},
    svc2_cta: {en:"Ask about vehicle insurance", hi:"वाहन बीमा के बारे में पूछें"},

    svc3_h3: {en:"Pollution Certificate (PUC)", hi:"प्रदूषण प्रमाण पत्र (PUC)"},
    svc3_p: {en:"Get your vehicle's pollution certificate on time, without any hassle.", hi:"बिना किसी परेशानी के अपने वाहन का प्रदूषण प्रमाण पत्र समय पर बनवाएं।"},
    svc3_li1: {en:"Two-wheeler & four-wheeler PUC", hi:"टू-व्हीलर व फोर-व्हीलर PUC"},
    svc3_li2: {en:"Quick check-up & certificate", hi:"तुरंत जांच व प्रमाण पत्र"},
    svc3_li3: {en:"Reminder before expiry", hi:"समय सीमा खत्म होने से पहले याद दिलाना"},
    svc3_li4: {en:"Follows all required norms", hi:"सभी ज़रूरी नियमों का पालन"},
    svc3_cta: {en:"Ask about PUC", hi:"PUC के बारे में पूछें"},

    renewal_eyebrow: {en:"Vehicle Renewal", hi:"वाहन रिन्यूअल"},
    renewal_h2: {en:"Get your next renewal quote", hi:"अपनी अगली रिन्यूअल कोटेशन पाएं"},
    renewal_p: {en:"Share your vehicle number and last policy details — we'll check and send you the renewal premium quote on WhatsApp. Note: this only sends a request; it does not calculate the premium automatically.", hi:"अपना वाहन नंबर और पिछली पॉलिसी की जानकारी दें—हम जांच कर आपको रिन्यूअल प्रीमियम का कोटेशन व्हाट्सएप पर भेजेंगे। ध्यान दें: यह सिर्फ रिक्वेस्ट भेजता है, प्रीमियम अपने आप नहीं निकलता।"},

    r_name_label: {en:"Your Name", hi:"आपका नाम"},
    r_name_ph: {en:"Enter your full name", hi:"पूरा नाम लिखें"},
    r_phone_label: {en:"Phone Number", hi:"फ़ोन नंबर"},
    r_phone_ph: {en:"10-digit mobile number", hi:"10 अंकों का मोबाइल नंबर"},
    r_vehicle_label: {en:"Vehicle Type", hi:"वाहन प्रकार"},
    r_vopt1: {en:"Bike / Two-wheeler", hi:"बाइक / टू-व्हीलर"},
    r_vopt2: {en:"Car / Four-wheeler", hi:"कार / फोर-व्हीलर"},
    r_regno_label: {en:"Vehicle Registration Number", hi:"वाहन रजिस्ट्रेशन नंबर"},
    r_regno_ph: {en:"e.g. UP32 AB 1234", hi:"जैसे UP32 AB 1234"},
    r_insurer_label: {en:"Last / Current Insurance Company", hi:"पिछली / मौजूदा बीमा कंपनी"},
    r_insurer_ph: {en:"e.g. National Insurance", hi:"जैसे National Insurance"},
    r_expiry_label: {en:"Last Policy Expiry Date", hi:"पिछली पॉलिसी की समाप्ति तिथि"},
    r_premium_label: {en:"Last Premium Paid (₹, optional)", hi:"पिछला प्रीमियम (₹, वैकल्पिक)"},
    r_premium_ph: {en:"e.g. 1200", hi:"जैसे 1200"},
    r_submit: {en:"Request Renewal Quote on WhatsApp", hi:"व्हाट्सएप पर रिन्यूअल कोटेशन मांगें"},
    r_note: {en:"This sends your details to our team on WhatsApp — we'll reply with your renewal premium quote. The premium is not calculated automatically on this site.", hi:"यह आपकी जानकारी हमारी टीम को व्हाट्सएप पर भेजता है—हम आपको रिन्यूअल प्रीमियम का कोटेशन भेजेंगे। प्रीमियम इस वेबसाइट पर अपने आप नहीं निकाला जाता।"},
    r_success: {en:"Thank you! Opening WhatsApp — please send your request there.", hi:"धन्यवाद! व्हाट्सएप खोला जा रहा है—कृपया वहाँ अपनी रिक्वेस्ट भेजें।"},

    why_eyebrow: {en:"Why Choose RS", hi:"RS क्यों चुनें"},
    why_h2: {en:"Trust as easy as one phone call", hi:"एक फ़ोन कॉल जितना आसान भरोसा"},
    why_p: {en:"No confusing terms — just straightforward advice, so you can make the right decision without hassle.", hi:"हम बड़ी-बड़ी शर्तें नहीं, सीधी और साफ सलाह देते हैं—ताकि आप सही फैसला बिना उलझन के ले सकें।"},
    why1_h4: {en:"Personal guidance", hi:"व्यक्तिगत मार्गदर्शन"},
    why1_p: {en:"We understand each customer's needs and suggest the right plan.", hi:"हर ग्राहक की ज़रूरत समझकर सही प्लान का सुझाव।"},
    why2_h4: {en:"Doorstep document service", hi:"घर बैठे दस्तावेज़ सेवा"},
    why2_p: {en:"Full help with filling forms and submitting documents.", hi:"फॉर्म भरने और दस्तावेज़ जमा करने में पूरी मदद।"},
    why3_h4: {en:"Claim support", hi:"क्लेम में सहयोग"},
    why3_p: {en:"We stand by you through the claim process whenever needed.", hi:"ज़रूरत पड़ने पर क्लेम प्रक्रिया में साथ खड़े रहते हैं।"},
    why4_h4: {en:"Transparent information", hi:"पारदर्शी जानकारी"},
    why4_p: {en:"Everything explained clearly, with no hidden conditions.", hi:"बिना छुपी शर्तों के, हर बात साफ़-साफ़ बताई जाती है।"},

    process_eyebrow: {en:"Process", hi:"प्रक्रिया"},
    process_h2: {en:"Protection starts in four easy steps", hi:"चार आसान चरणों में सुरक्षा शुरू"},
    step1_h4: {en:"Get in touch", hi:"संपर्क करें"},
    step1_p: {en:"Tell us your needs via call, WhatsApp or the form.", hi:"कॉल, व्हाट्सएप या फॉर्म के ज़रिए अपनी ज़रूरत बताएं।"},
    step2_h4: {en:"Choose the right plan", hi:"सही प्लान चुनें"},
    step2_p: {en:"We compare the available options and suggest the right plan for you.", hi:"आपकी ज़रूरत के अनुसार उपलब्ध विकल्पों की तुलना कर सही प्लान सुझाया जाता है।"},
    step3_h4: {en:"Submit documents", hi:"दस्तावेज़ जमा करें"},
    step3_p: {en:"Full support with paperwork and required documents.", hi:"ज़रूरी कागज़ात व फॉर्म भरने में पूरी सहायता दी जाती है।"},
    step4_h4: {en:"Policy/certificate issued", hi:"पॉलिसी/सर्टिफिकेट जारी"},
    step4_p: {en:"You're notified as soon as your policy or certificate is ready.", hi:"पॉलिसी या प्रमाण पत्र तैयार होते ही आपको सूचित किया जाता है।"},

    contact_eyebrow: {en:"Contact Us", hi:"संपर्क करें"},
    contact_h2: {en:"Let's talk about your protection today", hi:"आज ही अपनी सुरक्षा के बारे में बात करें"},
    contact_p: {en:"Fill the form below or call/WhatsApp us directly — we'll get back to you as soon as possible.", hi:"नीचे फॉर्म भरें या सीधे कॉल/व्हाट्सएप करें—हम जल्द से जल्द आपसे संपर्क करेंगे।"},

    f_name_label: {en:"Your Name", hi:"आपका नाम"},
    f_name_ph: {en:"Enter your full name", hi:"पूरा नाम लिखें"},
    f_phone_label: {en:"Phone Number", hi:"फ़ोन नंबर"},
    f_phone_ph: {en:"10-digit mobile number", hi:"10 अंकों का मोबाइल नंबर"},
    f_service_label: {en:"Select Service", hi:"सेवा चुनें"},
    f_opt1: {en:"Life Insurance (LIC)", hi:"जीवन बीमा (LIC)"},
    f_opt2: {en:"Vehicle Insurance", hi:"वाहन बीमा"},
    f_opt3: {en:"Pollution Certificate (PUC)", hi:"प्रदूषण प्रमाण पत्र (PUC)"},
    f_opt4: {en:"Other / Need Information", hi:"अन्य / जानकारी चाहिए"},
    f_msg_label: {en:"Message (optional)", hi:"संदेश (वैकल्पिक)"},
    f_msg_ph: {en:"Briefly describe what you need", hi:"अपनी ज़रूरत के बारे में संक्षेप में बताएं"},
    f_submit: {en:"Send on WhatsApp", hi:"व्हाट्सएप पर भेजें"},
    f_note: {en:"As soon as you submit, your message will open ready to send directly on WhatsApp.", hi:"फॉर्म सबमिट करते ही आपका संदेश तैयार होकर सीधे व्हाट्सएप पर भेजने के लिए खुलेगा।"},
    f_success: {en:"Thank you! Opening WhatsApp — please send your message there.", hi:"धन्यवाद! व्हाट्सएप खोला जा रहा है—कृपया वहाँ मैसेज भेजें।"},

    ci_eyebrow: {en:"Direct Contact", hi:"सीधा संपर्क"},
    ci_p: {en:"Our team is ready to help you by call, WhatsApp or email — whichever way works best for you.", hi:"हमारी टीम कॉल, व्हाट्सएप या ईमेल—हर तरीके से आपकी मदद के लिए तैयार है।"},
    ci_phone_label: {en:"Phone", hi:"फ़ोन"},
    ci_email_label: {en:"Email", hi:"ईमेल"},
    ci_office_label: {en:"Office", hi:"कार्यालय"},
    ci_office_value: {en:"Ganj Muradabad, Uttar Pradesh", hi:"गंज मुरादाबाद, उत्तर प्रदेश"},
    ci_hours_label: {en:"Hours", hi:"समय"},
    ci_hours_value: {en:"Monday–Saturday, 9 AM – 7 PM", hi:"सोमवार–शनिवार, सुबह 9 — शाम 7"},
    ci_whatsapp_btn: {en:"Chat on WhatsApp", hi:"व्हाट्सएप पर बात करें"},

    footer_tagline: {en:"Protecting your family, vehicle and environment — all from one trusted place.", hi:"परिवार, वाहन और पर्यावरण—तीनों की सुरक्षा एक भरोसेमंद जगह से।"},
    footer_services_h5: {en:"Services", hi:"सेवाएं"},
    footer_links_h5: {en:"Quick Links", hi:"क्विक लिंक"},
    footer_contact_h5: {en:"Contact", hi:"संपर्क"},
    footer_disclaimer: {en:"RS Life & General Insurance Center is an independent, authorized insurance agent service that helps customers choose suitable insurance plans. This is not the official website of LIC or any other insurance company. All policy terms and conditions are determined by the respective insurance company.", hi:"RS Life & General Insurance Center एक स्वतंत्र, अधिकृत बीमा एजेंट सेवा है और ग्राहकों को उपयुक्त बीमा योजनाएं चुनने में सहायता प्रदान करती है। यह LIC या किसी अन्य बीमा कंपनी की आधिकारिक वेबसाइट नहीं है। सभी पॉलिसी नियम व शर्तें संबंधित बीमा कंपनी द्वारा निर्धारित की जाती हैं।"},
    footer_copyright_pre: {en:"©", hi:"©"},
    footer_copyright_post: {en:"All rights reserved.", hi:"सर्वाधिकार सुरक्षित।"}
  };

  function applyLanguage(lang){
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if(translations[key]) el.innerHTML = translations[key][lang];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if(translations[key]) el.placeholder = translations[key][lang];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    try{ localStorage.setItem('rs_lang', lang); }catch(e){}
  }

  let savedLang = 'en';
  try{ savedLang = localStorage.getItem('rs_lang') || 'en'; }catch(e){}
  applyLanguage(savedLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
  });

  // Mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Contact form -> WhatsApp
  const form = document.getElementById('enquiryForm');
  const formMsg = document.getElementById('formMsg');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('fname').value.trim();
    const phone = document.getElementById('fphone').value.trim();
    const serviceSelect = document.getElementById('fservice');
    const service = serviceSelect.options[serviceSelect.selectedIndex].text;
    const msg = document.getElementById('fmsg').value.trim();

    let text = `Hello RS Insurance Center,%0A`;
    text += `My name: ${name}%0A`;
    text += `Phone number: ${phone}%0A`;
    text += `I need: ${service}%0A`;
    if(msg){ text += `Message: ${msg}%0A`; }

    formMsg.classList.add('show');
    window.open(`https://wa.me/919598480276?text=${text}`, '_blank');
  });

  // Vehicle renewal quote request -> WhatsApp
  const renewalForm = document.getElementById('renewalForm');
  const renewalMsg = document.getElementById('renewalMsg');
  renewalForm.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('rname').value.trim();
    const phone = document.getElementById('rphone').value.trim();
    const vehicleSelect = document.getElementById('rvehicle');
    const vehicleType = vehicleSelect.options[vehicleSelect.selectedIndex].text;
    const regNo = document.getElementById('rregno').value.trim().toUpperCase();
    const insurer = document.getElementById('rinsurer').value.trim();
    const expiry = document.getElementById('rexpiry').value;
    const premium = document.getElementById('rpremium').value;

    if(!name || !phone || !regNo){
      document.getElementById('rregno').reportValidity();
      return;
    }

    let text = `Hello RS Insurance Center,%0A`;
    text += `I want a *renewal quote* for my vehicle.%0A`;
    text += `Name: ${name}%0A`;
    text += `Phone number: ${phone}%0A`;
    text += `Vehicle type: ${vehicleType}%0A`;
    text += `Vehicle number: ${regNo}%0A`;
    if(insurer){ text += `Last insurer: ${insurer}%0A`; }
    if(expiry){ text += `Last policy expiry: ${expiry}%0A`; }
    if(premium){ text += `Last premium paid: Rs.${premium}%0A`; }
    text += `Please share the renewal premium quote.`;

    renewalMsg.classList.add('show');
    window.open(`https://wa.me/919598480276?text=${text}`, '_blank');
  });
