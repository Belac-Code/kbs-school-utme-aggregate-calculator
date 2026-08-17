// ---------------- HERO BARCODE ----------------
(function renderBarcode(){
  const el = document.getElementById('heroBarcode');
  if(!el) return;
  el.innerHTML = Array.from({length:22}, () =>
    `<span style="height:${8 + Math.random()*18}px"></span>`
  ).join('');
})();

// ---------------- DATA LAYER ----------------
const DATA = {
  RSU: {
    generalCutoff: 190,
    formula: "half",
    faculties: {
      "Admin & Management Sciences": [
        {name:"Law", merit:75, catchment:72},
        {name:"Accounting", merit:58, catchment:37},
        {name:"Business Administration", merit:54, catchment:37},
        {name:"Logistics & Supply Management", merit:41},
        {name:"Employment & Human Resource Mgmt", merit:40},
        {name:"Office & Information Management", merit:38},
        {name:"Finance", merit:37},
        {name:"Marketing", merit:37}
      ],
      "Medical Sciences & Health": [
        {name:"Medicine and Surgery", merit:71, catchment:66},
        {name:"Nursing Sciences", merit:66, catchment:62},
        {name:"Radiography", merit:61, catchment:58},
        {name:"Physiotherapy", merit:56, catchment:52},
        {name:"Medical Laboratory Science", merit:56, catchment:53},
        {name:"Public Health Sciences", merit:52, catchment:49},
        {name:"Human Anatomy", merit:50, catchment:35},
        {name:"Human Physiology", merit:47, catchment:40}
      ],
      "Engineering": [
        {name:"Computer Engineering", merit:59, catchment:53},
        {name:"Mechanical Engineering", merit:56, catchment:51},
        {name:"Civil Engineering", merit:54, catchment:47},
        {name:"Electrical Engineering", merit:53, catchment:49},
        {name:"Marine Engineering", merit:52, catchment:48},
        {name:"Petroleum Engineering", merit:54, catchment:50},
        {name:"Chemical/Petrochemical Engineering", merit:47, catchment:37},
        {name:"Agric & Environmental Engineering", merit:43}
      ],
      "Sciences & Computing": [
        {name:"Computer Science", merit:57, catchment:53},
        {name:"Physics", merit:47},
        {name:"Plant Sci. & Biotechnology", merit:47},
        {name:"Biochemistry", merit:44, catchment:34},
        {name:"Animal & Environmental Biology", merit:41},
        {name:"Mathematics", merit:39},
        {name:"Chemistry", merit:38},
        {name:"Maritime Science", merit:38},
        {name:"Geology", merit:37}
      ],
      "Social Sciences & Humanities": [
        {name:"French", merit:58},
        {name:"Religious Studies", merit:57},
        {name:"Journalism & Media Studies", merit:56, catchment:50},
        {name:"Public Relations & Advertising", merit:49, catchment:40},
        {name:"Political Science", merit:47, catchment:36},
        {name:"Philosophy", merit:46},
        {name:"Development & Communication Studies", merit:44},
        {name:"Broadcasting & Cinematography", merit:43},
        {name:"History & International Diplomacy", merit:42},
        {name:"Economics", merit:41},
        {name:"Theatre Arts", merit:39},
        {name:"English & Literature", merit:38},
        {name:"Psychology", merit:38},
        {name:"Sociology", merit:38}
      ],
      "Environmental Sciences": [
        {name:"Architecture", merit:54, catchment:48},
        {name:"Urban & Regional Planning", merit:49},
        {name:"Environmental Management", merit:43},
        {name:"Quantity Surveying", merit:40},
        {name:"Surveying & Geomatics", merit:38},
        {name:"Estate Management", merit:36}
      ]
    }
  },
  UNIPORT: {
    generalCutoff: 160,
    formula: "half",
    faculties: {
      "Agriculture": [
        {name:"Agricultural Economics & Extension", low:45, high:55},
        {name:"Animal Science & Fisheries", low:45, high:55},
        {name:"Crop & Soil Science", low:45, high:55},
        {name:"Forestry & Wildlife Management", low:42, high:52}
      ],
      "Allied Medical Sciences": [
        {name:"Medical Laboratory Science", low:65, high:75},
        {name:"Nursing Science", low:70, high:80},
        {name:"Radiography & Radiation Science", low:62, high:72}
      ],
      "Basic Medical Sciences": [
        {name:"Human Anatomy", low:55, high:65},
        {name:"Human Physiology", low:55, high:65},
        {name:"Pharmacology", low:58, high:68}
      ],
      "Clinical Sciences": [
        {name:"Medicine & Surgery", low:75, high:85}
      ],
      "Communication & Media Studies": [
        {name:"Advertising", low:52, high:62},
        {name:"Broadcasting", low:50, high:60},
        {name:"Film & Multimedia Studies", low:50, high:60},
        {name:"Journalism & Media Studies", low:55, high:65},
        {name:"Public Relations", low:52, high:62}
      ],
      "Computer Science": [
        {name:"Computer Science", low:60, high:70},
        {name:"Cybersecurity", low:60, high:70},
        {name:"Information Technology", low:58, high:68},
        {name:"Software Engineering", low:60, high:70}
      ],
      "Dentistry": [
        {name:"Dentistry & Dental Surgery", low:78, high:88}
      ],
      "Education": [
        {name:"Adult & Non-Formal Education", low:42, high:52},
        {name:"Educational Foundations", low:42, high:52},
        {name:"Educational Management", low:42, high:52},
        {name:"Educational Psychology, Guidance & Counselling", low:44, high:54},
        {name:"Human Kinetics & Health Education", low:42, high:52},
        {name:"Library & Information Science", low:42, high:52},
        {name:"Science Education (Biology, Chemistry, Mathematics, Physics)", low:45, high:55},
        {name:"Special Education", low:42, high:52}
      ],
      "Engineering": [
        {name:"Chemical Engineering", low:65, high:75},
        {name:"Civil Engineering", low:62, high:72},
        {name:"Electrical/Electronic Engineering", low:63, high:73},
        {name:"Gas Engineering", low:63, high:73},
        {name:"Mechatronics Engineering", low:63, high:73},
        {name:"Mechanical Engineering", low:60, high:70},
        {name:"Petroleum & Gas Engineering", low:68, high:78}
      ],
      "Environmental Sciences": [
        {name:"Architecture", low:60, high:70},
        {name:"Environmental Management", low:48, high:58},
        {name:"Estate Management", low:48, high:58},
        {name:"Quantity Surveying", low:50, high:60},
        {name:"Urban & Regional Planning", low:50, high:60}
      ],
      "Humanities": [
        {name:"Fine Arts & Design", low:46, high:56},
        {name:"Foreign Languages & Literatures (French, German)", low:46, high:56},
        {name:"History & Diplomatic Studies", low:46, high:56},
        {name:"Linguistics & Communication Studies", low:46, high:56},
        {name:"Music", low:44, high:54},
        {name:"Philosophy", low:44, high:54},
        {name:"Religious & Cultural Studies", low:44, high:54},
        {name:"Theatre & Film Studies", low:46, high:56}
      ],
      "Law": [
        {name:"Commercial Law", low:65, high:75},
        {name:"International Law", low:65, high:75},
        {name:"Private & Property Law", low:65, high:75},
        {name:"Public Law", low:65, high:75}
      ],
      "Management Sciences": [
        {name:"Accounting", low:55, high:65},
        {name:"Banking & Finance", low:55, high:65},
        {name:"Hospitality Management & Tourism", low:48, high:58},
        {name:"Management", low:50, high:60},
        {name:"Marketing", low:48, high:58}
      ],
      "Pharmaceutical Sciences": [
        {name:"Pharmacy", low:70, high:80}
      ],
      "Science": [
        {name:"Animal & Environmental Biology", low:45, high:55},
        {name:"Biochemistry", low:55, high:65},
        {name:"Geology", low:46, high:56},
        {name:"Industrial Chemistry", low:48, high:58},
        {name:"Pure & Applied Chemistry", low:46, high:56},
        {name:"Pure & Industrial Mathematics", low:44, high:54},
        {name:"Microbiology", low:55, high:65},
        {name:"Plant Science & Biotechnology", low:44, high:54},
        {name:"Physics", low:44, high:54}
      ],
      "Social Sciences": [
        {name:"Economics", low:55, high:65},
        {name:"Geography & Environmental Management", low:46, high:56},
        {name:"Political & Administrative Studies", low:50, high:60},
        {name:"Sociology", low:48, high:58}
      ]
    }
  },
  IAUE: {
    generalCutoff: 150,
    formula: "jambcaps",
    faculties: {
      "Natural & Applied Sciences": [
        {name:"Computer Science", jamb:250, caps:62.5},
        {name:"Biology / Microbiology / IT / Software Eng", jamb:200, caps:50.0},
        {name:"Physics / Chemistry / Industrial Chemistry", jamb:180, caps:45.0},
        {name:"Mathematics", jamb:160, caps:40.0},
        {name:"Geophysics / Statistics / Zoology", jamb:150, caps:37.5}
      ],
      "Management Sciences": [
        {name:"Accounting / Management", jamb:200, caps:50.0},
        {name:"Office & Info Mgmt / Marketing / Banking & Finance / Hospitality", jamb:180, caps:45.0},
        {name:"Entrepreneurship / Employment & HR Mgmt", jamb:170, caps:42.5}
      ],
      "Social Sciences": [
        {name:"Political Science / Economics", jamb:200, caps:50.0},
        {name:"Sociology", jamb:190, caps:50.0},
        {name:"Social Work / Public Admin / Library Sci / Env Mgmt / Peace & Conflict", jamb:180, caps:45.0},
        {name:"Geography / Petroleum Economics", jamb:150, caps:37.5}
      ],
      "Humanities": [
        {name:"Theatre Arts / English / Mass Comm", jamb:200, caps:50.0},
        {name:"History & Diplomatic Studies", jamb:190, caps:47.5},
        {name:"Fine & Applied Arts / Linguistics", jamb:180, caps:45.0},
        {name:"French", jamb:160, caps:40.0},
        {name:"Religious Studies / Music / Philosophy", jamb:150, caps:37.5}
      ],
      "Education Faculties": [
        {name:"Health & Safety Education", jamb:200, caps:50.0},
        {name:"Guidance & Counselling / Human Kinetics", jamb:180, caps:45.0},
        {name:"Secretarial / Accounting / Economics Education", jamb:170, caps:42.5},
        {name:"Educational Mgmt / Early Childhood / Special Ed / Adult Ed / Science Ed", jamb:150, caps:37.5}
      ]
    }
  }
};
const UNI_NAMES = {RSU:"Rivers State University", UNIPORT:"University of Port Harcourt", IAUE:"Ignatius Ajuru University of Education"};

// ---------------- POPULATE TABLES ----------------
function renderTables(){
  const rsuBody = document.getElementById('tbody-RSU');
  Object.entries(DATA.RSU.faculties).forEach(([fac, courses])=>{
    courses.forEach(c=>{
      rsuBody.innerHTML += `<tr><td class="course-name">${c.name}</td><td>${fac}</td><td><span class="pill">${c.merit}%</span></td><td>${c.catchment?c.catchment+'%':'—'}</td></tr>`;
    });
  });
  const upBody = document.getElementById('tbody-UNIPORT');
  Object.entries(DATA.UNIPORT.faculties).forEach(([fac, courses])=>{
    courses.forEach(c=>{
      const spread = c.high-c.low;
      const comp = spread<=10 && c.low>=65 ? "Very High" : c.low>=55 ? "High" : "Moderate";
      upBody.innerHTML += `<tr><td class="course-name">${c.name}</td><td>${fac}</td><td><span class="pill">${c.low}–${c.high}%</span></td><td>${comp}</td></tr>`;
    });
  });
  const iaueBody = document.getElementById('tbody-IAUE');
  Object.entries(DATA.IAUE.faculties).forEach(([fac, courses])=>{
    courses.forEach(c=>{
      iaueBody.innerHTML += `<tr><td class="course-name">${c.name}</td><td>${fac}</td><td><span class="pill">${c.jamb}</span></td><td>${c.caps}%</td></tr>`;
    });
  });
}
renderTables();

// ---------------- TABS ----------------
document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.table-panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('panel-'+btn.dataset.tab).classList.add('active');
  });
});

// ---------------- CALCULATOR LOGIC ----------------
const uniSelect = document.getElementById('university');
const courseSelect = document.getElementById('course');

const putmeField = document.getElementById('putmeField');
const putmeInput = document.getElementById('putme');
const putmeLabel = document.getElementById('putmeLabel');
const putmeHint = document.getElementById('putmeHint');
const iaueNote = document.getElementById('iaueNote');
const jambHint = document.querySelector('#scoreRow .field:first-child .hint');

function configureScoreInputs(uni){
  if(uni === 'IAUE'){
    putmeField.style.display = 'none';
    iaueNote.style.display = 'block';
    putmeInput.value = '';
    putmeInput.removeAttribute('required');
  } else if(uni === 'RSU'){
    putmeField.style.display = '';
    iaueNote.style.display = 'none';
    putmeLabel.textContent = 'Post-UTME Score';
    putmeInput.setAttribute('max','50');
    putmeInput.placeholder = 'e.g. 38';
    putmeHint.textContent = 'Out of 50';
  } else if(uni === 'UNIPORT'){
    putmeField.style.display = '';
    iaueNote.style.display = 'none';
    putmeLabel.textContent = 'Post-UTME Score';
    putmeInput.setAttribute('max','400');
    putmeInput.placeholder = 'e.g. 260';
    putmeHint.textContent = 'Out of 400';
  } else {
    putmeField.style.display = '';
    iaueNote.style.display = 'none';
    putmeHint.textContent = '';
  }
}

uniSelect.addEventListener('change', ()=>{
  const uni = uniSelect.value;
  courseSelect.innerHTML = '';
  configureScoreInputs(uni);
  if(!uni){
    courseSelect.disabled = true;
    courseSelect.innerHTML = '<option value="">Select university first…</option>';
    return;
  }
  courseSelect.disabled = false;
  courseSelect.innerHTML = '<option value="">Select course…</option>';
  Object.entries(DATA[uni].faculties).forEach(([fac, courses])=>{
    const group = document.createElement('optgroup');
    group.label = fac;
    courses.forEach((c,i)=>{
      const opt = document.createElement('option');
      opt.value = fac + '|||' + c.name;
      opt.textContent = c.name;
      group.appendChild(opt);
    });
    courseSelect.appendChild(group);
  });
});

function computeAggregate(uni, jamb, putme){
  if(uni === 'RSU') return (jamb/8) + putme;          // Post-UTME out of 50, added directly
  if(uni === 'UNIPORT') return (jamb + putme) / 8;     // Post-UTME out of 400, same scale as JAMB
  if(uni === 'IAUE') return jamb / 4;                  // JAMB score alone, no Post-UTME test
  return (jamb/8) + (putme/2);
}

function getCourseCutoff(uni, fac, name){
  const c = DATA[uni].faculties[fac].find(x=>x.name===name);
  if(uni==='RSU') return {value:c.merit, catchment:c.catchment};
  if(uni==='UNIPORT') return {value:(c.low+c.high)/2, low:c.low, high:c.high};
  if(uni==='IAUE') return {value:c.caps, jamb:c.jamb};
  return {value:0};
}

document.getElementById('calcBtn').addEventListener('click', ()=>{
  const uni = uniSelect.value;
  const courseVal = courseSelect.value;
  const jamb = parseFloat(document.getElementById('jamb').value);
  const putme = uni === 'IAUE' ? 0 : parseFloat(document.getElementById('putme').value);

  if(!uni || !courseVal || isNaN(jamb) || (uni !== 'IAUE' && isNaN(putme))){
    alert(uni === 'IAUE'
      ? 'Please fill in course and JAMB score.'
      : 'Please fill in university, course, JAMB score and Post-UTME score.');
    return;
  }
  if(jamb<0||jamb>400){
    alert('JAMB score must be between 0 and 400.');
    return;
  }
  if(uni === 'RSU' && (putme<0||putme>50)){
    alert('RSU Post-UTME is scored out of 50 — check your entry.');
    return;
  }
  if(uni === 'UNIPORT' && (putme<0||putme>400)){
    alert('UNIPORT Post-UTME is scored out of 400 — check your entry.');
    return;
  }

  const [fac, courseName] = courseVal.split('|||');
  const agg = computeAggregate(uni, jamb, putme);
  const cutoffData = getCourseCutoff(uni, fac, courseName);
  const cutoff = cutoffData.value;
  const catchment = cutoffData.catchment || (cutoff - 4);

  let zone, badgeClass, feedbackClass, chancePct, feedback;
  if(agg >= cutoff + 5){
    zone='EXTREMELY HIGH PROBABILITY'; badgeClass='status-extreme'; feedbackClass='extreme'; chancePct=94;
    feedback="Outstanding! Your aggregate significantly exceeds the departmental benchmark. You stand an exceptional chance of securing first-batch merit admission.";
  } else if(agg >= cutoff){
    zone='HIGH PROBABILITY'; badgeClass='status-high'; feedbackClass=''; chancePct=82;
    feedback="Great job! You meet the departmental cut-off. You're well-positioned for merit list consideration.";
  } else if(agg >= catchment){
    zone='MODERATE PROBABILITY'; badgeClass='status-moderate'; feedbackClass='moderate'; chancePct=55;
    feedback="You're slightly below the primary merit benchmark, but near the Catchment threshold. You stand a good chance through Catchment area consideration or supplementary lists.";
  } else {
    zone='LOW PROBABILITY — ACTION REQUIRED'; badgeClass='status-low'; feedbackClass='low'; chancePct=20;
    feedback="Your aggregate falls noticeably below the cutoff. We strongly advise considering a Change of Course to a related field within the same faculty to guarantee admission.";
  }

  document.getElementById('rtCode').textContent = 'KBAE-' + Math.floor(100000+Math.random()*900000);
  document.getElementById('rtBadge').textContent = zone.split(' ')[0]+(zone.split(' ')[1]?' '+zone.split(' ')[1]:'');
  document.getElementById('rtBadge').className = 'status-badge ' + badgeClass;
  document.getElementById('rtCourse').textContent = courseName;
  document.getElementById('rtUni').textContent = UNI_NAMES[uni];
  document.getElementById('rtJamb').textContent = jamb;
  const rtPutmeBox = document.getElementById('rtPutmeBox');
  if(uni === 'IAUE'){
    rtPutmeBox.style.display = 'none';
    document.getElementById('rtMetrics').style.gridTemplateColumns = '1fr 1fr';
  } else {
    rtPutmeBox.style.display = '';
    document.getElementById('rtMetrics').style.gridTemplateColumns = '1fr 1fr 1fr';
    document.getElementById('rtPutmeLabel').textContent = uni === 'RSU' ? 'Post-UTME (/50)' : 'Post-UTME (/400)';
    document.getElementById('rtPutme').textContent = putme;
  }
  document.getElementById('rtCutoff').textContent = cutoff.toFixed(1)+'%';
  document.getElementById('rtAggInline').textContent = agg.toFixed(2)+'%';
  document.getElementById('rtChance').textContent = chancePct+'% est. chance';
  document.getElementById('rtFeedback').textContent = feedback;
  document.getElementById('rtFeedback').className = 'rt-feedback ' + feedbackClass;

  const bar = document.getElementById('rtBar');
  bar.style.width = '0%';
  bar.style.background = badgeClass==='status-extreme'?'var(--green)':badgeClass==='status-high'?'var(--cyan)':badgeClass==='status-moderate'?'var(--amber)':'var(--red)';
  setTimeout(()=>{ bar.style.width = Math.min(chancePct,100)+'%'; }, 80);

  const scoreLine = uni === 'IAUE' ? `JAMB: ${jamb}` : `JAMB: ${jamb}, Post-UTME: ${putme}`;
  const waMsg = encodeURIComponent(`Hi KB's Team, I calculated my ${UNI_NAMES[uni]} aggregate for ${courseName} as ${agg.toFixed(2)}% (${scoreLine}). I'd like guidance on my chances.`);
  document.getElementById('rtWa').href = `https://wa.me/2349020730693?text=${waMsg}`;

  document.getElementById('resultEmpty').style.display = 'none';
  document.getElementById('resultCard').classList.add('show');
  document.getElementById('resultCard').scrollIntoView({behavior:'smooth', block:'nearest'});
});

document.getElementById('rtAgain').addEventListener('click', (e)=>{
  e.preventDefault();
  document.getElementById('resultCard').classList.remove('show');
  document.getElementById('resultEmpty').style.display = 'block';
  document.getElementById('jamb').value='';
  document.getElementById('putme').value='';
  window.scrollTo({top: document.getElementById('calculator').offsetTop-90, behavior:'smooth'});
});

// initialize score inputs for default (no university selected) state
configureScoreInputs('');
