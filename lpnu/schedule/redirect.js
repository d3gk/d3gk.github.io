function browser_check () {
	var ua = navigator.userAgent,
      ios = ua.match(/iphone|ipod/i),
      v2 = ua.match(/ OS 2_/i),
      v3 = ua.match(/ OS 3_/i),
      v4 = ua.match(/ OS 4_/i),
      v5 = ua.match(/ OS 5_/i),
      v6 = ua.match(/ OS 6_/i),
      v7 = ua.match(/ OS 7_/i),
      v8 = ua.match(/ OS 8_/i),
      v9 = ua.match(/ OS 9_/i),
      v10 = ua.match(/ OS 10_/i),
      v11 = ua.match(/ OS 11_/i),
      v12 = ua.match(/ OS 12_/i),
      v13 = ua.match(/ OS 13_/i),
      v14 = ua.match(/ OS 14_/i),
      v15 = ua.match(/ OS 15_/i),
      v16 = ua.match(/ OS 16_/i),
      v17 = ua.match(/ OS 17_/i),
      v18 = ua.match(/ OS 18_/i),
      v19 = ua.match(/ OS 19_/i),
      redirectTo = 'https://d3gk.github.io';
]
	if      (ios && v2) { redirectTo = '/lpnu/index6.html'; }
	else if (ios && v3) { redirectTo = '/lpnu/index6.html'; }
	else if (ios && v4) { redirectTo = '/lpnu/index6.html'; } 
	else if (ios && v5) { redirectTo = '/lpnu/index6.html'; } 
	else if (ios && v6) { redirectTo = '/lpnu/index6.html'; }         
	else if (ios && v7) { redirectTo = '/lpnu/index7.html'; }          
	else if (ios && v8) { redirectTo = '/lpnu/index7.html'; }          
	else if (ios && v9) { redirectTo = '/lpnu/index7.html'; }          
	else if (ios && v10) { redirectTo = '/lpnu/index7.html'; }         
	else if (ios && v11) { redirectTo = '/lpnu/index7.html'; }         
	else if (ios && v12) { redirectTo = '/lpnu/index7.html'; }         
	else if (ios && v13) { redirectTo = '/lpnu/index7.html'; }         
	else if (ios && v14) { redirectTo = '/lpnu/index7.html'; }         
	else if (ios && v15) { redirectTo = '/lpnu/index7.html'; }         
	else if (ios && v16) { redirectTo = '/lpnu/index7.html'; }         
	else if (ios && v17) { redirectTo = '/lpnu/index7.html'; }         
	else if (ios && v18) { redirectTo = '/lpnu/index7.html'; }         
	else if (ios && v19) { redirectTo = '/lpnu/index7.html'; }     
	else { 
		redirectTo = '/lpnu/index7.html';
		//location.href = 'https://student.lpnu.ua/students_schedule?studygroup_abbrname=%D0%B0%D0%BF-11&semestr=2&semestrduration=1';
		//return;
	}     

	if (location.href.indexOf(redirectTo) == -1) {
		location.replace(redirectTo);
	}
}

browser_check();
