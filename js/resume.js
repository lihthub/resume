$(function() {
	$.getJSON("data/resume.json", function(result) {
		var html = '<div class="profile"><div class="profile-photo"><img src="' + result.profile_photo + '"></div><div class="basic-info"><div class="full-name">' + result.full_name + '</div><div><span>' + result.sex + '&nbsp;&nbsp;</span><span>' + result.age + '&nbsp;&nbsp;</span><span>' + result.city + '&nbsp;&nbsp;</span><span style="color:#bbb">|&nbsp;&nbsp;</span><span>' + result.highest_edu + '&nbsp;&nbsp;</span><span>' + result.work_years + '年工作经验</span></div><div><i class="fa fa-mobile icon-color font-16px" aria-hidden="true"></i> <span>' + result.phone + '&nbsp;&nbsp;</span><i class="fa fa-envelope-o icon-color" aria-hidden="true"></i> <span>' + result.email + '&nbsp;&nbsp;</span><i class="fa fa-github icon-color" aria-hidden="true"></i> <span>' + result.github + '</span></div></div></div><div class="details"><div class="item"><div class="item-title"><img src="images/ico_career_objective.png"><span>求职意向</span></div><div class="item-line"></div><div class="item-detail">' + result.position_applied + '&nbsp;&nbsp;' + result.work_city + '</div></div><div class="item"><div class="item-title"><img src="images/ico_work_exp.png"><span>工作经历</span></div><div class="item-line"></div><div class="item-detail">';
		var workExp = result.work_exp;
		for (var i in workExp) {
			html += '<div class="exp"><div class="date">' + workExp[i].form_date + '&nbsp;-&nbsp;' + workExp[i].to_date + '</div><div class="timeline-point">';
			if (workExp.length > 1 && i == 0) {
				html += '<img class="timeline-top-img" src="images/timeline_top.png">';
			} else if (workExp.length > 1 && i == workExp.length - 1) {
				html += '<img class="timeline-bottom-img" src="images/timeline_bottom.png">';
			}
			html += '</div><div class="exp-title">' + workExp[i].company + '&nbsp;&nbsp;' + workExp[i].position + '</div></div>';
			if (workExp.length > 1 && i != workExp.length - 1) {
				html += '<div class="timeline"><div class="timeline-right has-timeline">' + workExp[i].description + '</div></div>';
			} else {
				html += '<div class="timeline"><div class="timeline-right no-timeline">' + workExp[i].description + '</div></div>';
			}
		}
		html += '</div></div><div class="item"><div class="item-title"><img src="images/ico_project_exp.png"><span>项目经历</span></div><div class="item-line"></div><div class="item-detail">';
		var projectExp = result.project_exp;
		for (var i in projectExp) {
			html += '<div class="exp"><div class="date">' + projectExp[i].form_date + '&nbsp;-&nbsp;' + projectExp[i].to_date + '</div><div class="timeline-point">';
			if (projectExp.length > 1 && i == 0) {
				html += '<img class="timeline-top-img" src="images/timeline_top.png">';
			} else if (projectExp.length > 1 && i == projectExp.length - 1) {
				html += '<img class="timeline-bottom-img" src="images/timeline_bottom.png">';
			}
			html += '</div><div class="exp-title">' + projectExp[i].project_name + '&nbsp;&nbsp;' + projectExp[i].position + '</div></div>';
			if (projectExp.length > 1 && i != projectExp.length - 1) {
				html += '<div class="timeline"><div class="timeline-right has-timeline">' + projectExp[i].description + '</div></div>';
			} else {
				html += '<div class="timeline"><div class="timeline-right no-timeline">' + projectExp[i].description + '</div></div>';
			}
		}
		html += '</div></div><div class="item"><div class="item-title"><img src="images/ico_professional_skills.png"><span>个人技能</span></div><div class="item-line"></div><div class="item-detail">' + result.professional_skills + '</div></div><div class="item"><div class="item-title"><img src="images/ico_edu_exp.png"><span>教育经历</span></div><div class="item-line"></div><div class="item-detail">';
		var eduExp = result.edu_exp;
		for (var i in eduExp) {
			html += '<div class="edu"><div class="date">' + eduExp[i].form_date + '&nbsp;-&nbsp;' + eduExp[i].to_date + '</div><div class="timeline-point">';
			if (eduExp.length > 1 && i == 0) {
				html += '<img class="timeline-top-img" src="images/timeline_top.png">';
			} else if (eduExp.length > 1 && i == eduExp.length - 1) {
				html += '<img class="timeline-bottom-img" src="images/timeline_bottom.png">';
			}
			html += '</div><div class="edu-detail">' + eduExp[i].school + '&nbsp;&nbsp;' + eduExp[i].major + '&nbsp;&nbsp;' + eduExp[i].degree + '</div></div>';
			if (eduExp.length > 1 && i != eduExp.length - 1) {
				html += '<div class="timeline"><div class="timeline-right space-timeline"></div></div>';
			}
		}
		html += '</div></div><div class="item"><div class="item-title"><img src="images/ico_self_evaluation.png"><span>自我评价</span></div><div class="item-line"></div><div class="item-detail">' + result.self_evaluation + '</div></div></div>';
		$('#resume-content').html(html);
	});
});