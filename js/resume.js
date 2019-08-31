$(function() {
	// 根据生日计算年龄
	var birthday = new Date(resume.birthday + 'T00:00:00');
	var today = new Date();
	var birthYear = birthday.getFullYear();
	var thisYear = today.getFullYear();
	birthday.setFullYear(thisYear);
	var age;
	if (today.getTime() > birthday.getTime()) {
		age = thisYear - birthYear;
	} else {
		age = thisYear - birthYear - 1;
	}

	// 根据参加工作时间计算工作年限
	var workYears;
	var workDateTo = today;
	var workDateToYear = thisYear;
	var workDateFrom = new Date(resume.work_date_from + 'T00:00:00');
	var workDateFromYear = workDateFrom.getFullYear();
	workDateFrom.setFullYear(workDateToYear);
	if (workDateTo.getTime() > workDateFrom.getTime()) {
		workYears = workDateToYear - workDateFromYear;
	} else {
		workYears = workDateToYear - workDateFromYear - 1;
	}

	// 求职意向 工作经历
	var content = '<div class="profile"><div class="profile-photo"><img src="' + resume.profile_photo + '"></div><div class="basic-info"><div class="full-name">' + resume.full_name + '</div><div><span>' + resume.sex + '&nbsp;&nbsp;</span><span>' + age + '&nbsp;&nbsp;</span><span>' + resume.city + '&nbsp;&nbsp;</span><span style="color:#bbb">|&nbsp;&nbsp;</span><span>' + resume.highest_edu + '&nbsp;&nbsp;</span><span>' + workYears + '年工作经验</span></div><div><i class="fa fa-mobile icon-color font-16px" aria-hidden="true"></i> <span>' + resume.phone + '&nbsp;&nbsp;</span><i class="fa fa-envelope-o icon-color" aria-hidden="true"></i> <span>' + resume.email + '&nbsp;&nbsp;</span><i class="fa fa-github icon-color" aria-hidden="true"></i> <span>' + resume.github + '</span></div></div></div><div class="details"><div class="item"><div class="item-title"><img src="images/ico_career_objective.png"><span>求职意向</span></div><div class="item-line"></div><div class="item-detail">' + resume.position_applied + '&nbsp;&nbsp;<i class="fa fa-map-marker icon-color" aria-hidden="true"></i> ' + resume.work_city + '</div></div><div class="item"><div class="item-title"><img src="images/ico_work_exp.png"><span>工作经历</span></div><div class="item-line"></div><div class="item-detail">';
	var workExp = resume.work_exp;
	for (var i in workExp) {
		content += '<div class="exp"><div class="date">' + workExp[i].form_date + '&nbsp;-&nbsp;' + workExp[i].to_date + '</div><div class="timeline-point">';
		if (workExp.length > 1 && i == 0) {
			content += '<img class="timeline-top-img" src="images/timeline_top.png">';
		} else if (workExp.length > 1 && i != 0) {
			content += '<img class="timeline-bottom-img" src="images/timeline_bottom.png">';
		}
		content += '</div><div class="exp-title">' + workExp[i].company + '&nbsp;&nbsp;' + workExp[i].position + '&nbsp;&nbsp;<i class="fa fa-map-marker icon-color" aria-hidden="true"></i> ' + workExp[i].city + '</div></div>';
		if (workExp.length > 1 && i != workExp.length - 1) {
			content += '<div class="timeline"><div class="timeline-right has-timeline">' + workExp[i].description + '</div></div>';
		} else {
			content += '<div class="timeline"><div class="timeline-right no-timeline">' + workExp[i].description + '</div></div>';
		}
	}

	// 项目经历
	content += '</div></div><div class="item"><div class="item-title"><img src="images/ico_project_exp.png"><span>项目经历</span></div><div class="item-line"></div><div class="item-detail">';
	var projectExp = resume.project_exp;
	for (var i in projectExp) {
		content += '<div class="exp"><div class="date">' + projectExp[i].form_date + '&nbsp;-&nbsp;' + projectExp[i].to_date + '</div><div class="timeline-point">';
		if (projectExp.length > 1 && i == 0) {
			content += '<img class="timeline-top-img" src="images/timeline_top.png">';
		} else if (projectExp.length > 1 && i != 0) {
			content += '<img class="timeline-bottom-img" src="images/timeline_bottom.png">';
		}
		content += '</div><div class="exp-title">' + projectExp[i].project_name + '&nbsp;&nbsp;' + projectExp[i].position + '</div></div>';
		if (projectExp.length > 1 && i != projectExp.length - 1) {
			content += '<div class="timeline"><div class="timeline-right has-timeline">' + projectExp[i].description + '</div></div>';
		} else {
			content += '<div class="timeline"><div class="timeline-right no-timeline">' + projectExp[i].description + '</div></div>';
		}
	}

	// 个人技能 教育经历
	content += '</div></div><div class="item"><div class="item-title"><img src="images/ico_professional_skills.png"><span>个人技能</span></div><div class="item-line"></div><div class="item-detail">' + resume.professional_skills + '</div></div><div class="item"><div class="item-title"><img src="images/ico_edu_exp.png"><span>教育经历</span></div><div class="item-line"></div><div class="item-detail">';
	var eduExp = resume.edu_exp;
	for (var i in eduExp) {
		content += '<div class="edu"><div class="date">' + eduExp[i].form_date + '&nbsp;-&nbsp;' + eduExp[i].to_date + '</div><div class="timeline-point">';
		if (eduExp.length > 1 && i == 0) {
			content += '<img class="timeline-top-img" src="images/timeline_top.png">';
		} else if (eduExp.length > 1 && i != 0) {
			content += '<img class="timeline-bottom-img" src="images/timeline_bottom.png">';
		}
		content += '</div><div class="edu-detail">' + eduExp[i].school + '&nbsp;&nbsp;' + eduExp[i].major + '&nbsp;&nbsp;' + eduExp[i].degree + '</div></div>';
		if (eduExp.length > 1 && i != eduExp.length - 1) {
			content += '<div class="timeline"><div class="timeline-right space-timeline"></div></div>';
		}
	}

	// 自我评价
	content += '</div></div><div class="item"><div class="item-title"><img src="images/ico_self_evaluation.png"><span>自我评价</span></div><div class="item-line"></div><div class="item-detail">' + resume.self_evaluation + '</div></div></div>';
	
	$('#resume-content').html(content);
});