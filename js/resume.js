$(function() {
	$.getJSON("data/resume.json", function(result) {
		$('#profile').html('<div class="profile-photo"><img src="' + result.profile_photo + '"></div><div class="basic-info"><div class="full-name">' + result.full_name + '</div><div><span>' + result.sex + '&nbsp;&nbsp;</span><span>' + result.age + '&nbsp;&nbsp;</span><span>' + result.city + '&nbsp;&nbsp;</span><span style="color:#bbb">|&nbsp;&nbsp;</span><span>' + result.highest_edu + '&nbsp;&nbsp;</span><span>' + result.work_years + '年工作经验</span></div><div><i class="fa fa-mobile icon-color font-16px" aria-hidden="true"></i> <span>' + result.phone + '&nbsp;&nbsp;</span><i class="fa fa-envelope-o icon-color" aria-hidden="true"></i> <span>' + result.email + '&nbsp;&nbsp;</span><i class="fa fa-github icon-color" aria-hidden="true"></i> <span>' + result.github + '</span></div></div>');
		$('#career-objective').html(result.position_applied + '&nbsp;&nbsp;' + result.work_city);
		$('#work-exp').html('');
		var workExp = result.work_exp;
		for (var i in workExp) {
			$('#work-exp').append('<div class="exp"><div class="date">' + workExp[i].form_date + '&nbsp;-&nbsp;' + workExp[i].to_date + '</div><div class="timeline-point">');
			if (workExp.length > 1 && i == 0) {
				$('#work-exp').append('<img class="timeline-top-img" src="images/timeline_top.png">');
			} else if (workExp.length > 1 && i == workExp.length - 1) {
				$('#work-exp').append('<img class="timeline-bottom-img" src="images/timeline_bottom.png">');
			}
			$('#work-exp').append('</div><div class="exp-title">' + workExp[i].company + '&nbsp;&nbsp;' + workExp[i].position + '</div></div><div class="timeline">');
			if (workExp.length > 1 && i != workExp.length - 1) {
				$('#work-exp').append('<div class="timeline-right has-timeline">' + workExp[i].description + '</div></div>');
			} else {
				$('#work-exp').append('<div class="timeline-right no-timeline">' + workExp[i].description + '</div></div>');
			}
		}
		$('#project-exp').html('');
		var projectExp = result.project_exp;
		for (var i in projectExp) {
			$('#project-exp').append('<div class="exp"><div class="date">' + projectExp[i].form_date + '&nbsp;-&nbsp;' + projectExp[i].to_date + '</div><div class="timeline-point">');
			if (projectExp.length > 1 && i == 0) {
				$('#project-exp').append('<img class="timeline-top-img" src="images/timeline_top.png">');
			} else if (projectExp.length > 1 && i == projectExp.length - 1) {
				$('#project-exp').append('<img class="timeline-bottom-img" src="images/timeline_bottom.png">');
			}
			$('#project-exp').append('</div><div class="exp-title">' + projectExp[i].project_name + '&nbsp;&nbsp;' + projectExp[i].position + '</div></div><div class="timeline">');
			if (projectExp.length > 1 && i != projectExp.length - 1) {
				$('#project-exp').append('<div class="timeline-right has-timeline">' + projectExp[i].description + '</div></div>');
			} else {
				$('#project-exp').append('<div class="timeline-right no-timeline">' + projectExp[i].description + '</div></div>');
			}
		}
		$('#professional-skills').html(result.professional_skills);
		$('#edu-exp').html('');
		var eduExp = result.edu_exp;
		for (var i in eduExp) {
			$('#edu-exp').append('<div class="edu"><div class="date">' + eduExp[i].form_date + '&nbsp;-&nbsp;' + eduExp[i].to_date + '</div><div class="timeline-point">');
			if (eduExp.length > 1 && i == 0) {
				$('#edu-exp').append('<img class="timeline-top-img" src="images/timeline_top.png">');
			} else if (eduExp.length > 1 && i == eduExp.length - 1) {
				$('#edu-exp').append('<img class="timeline-bottom-img" src="images/timeline_bottom.png">');
			}
			$('#edu-exp').append('</div><div class="edu-detail">' + eduExp[i].school + '&nbsp;&nbsp;' + eduExp[i].major + '&nbsp;&nbsp;' + eduExp[i].degree + '</div></div>');
			if (eduExp.length > 1 && i != eduExp.length - 1) {
				$('#edu-exp').append('<div class="timeline"><div class="timeline-right space-timeline"></div></div>');
			}
		}
		$('#self-evaluation').html(result.self_evaluation);
	});
});