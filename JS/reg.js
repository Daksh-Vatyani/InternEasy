const studentText = document.querySelector(".title-text .student");
        const studentForm = document.querySelector("form.student");
        const studentBtn = document.querySelector("label.student");
        const recruiterBtn = document.querySelector("label.recruiter");
        recruiterBtn.onclick = (() => {
            studentForm.style.marginLeft = "-50%";
            studentText.style.marginLeft = "-50%";
        });
        studentBtn.onclick = (() => {
            studentForm.style.marginLeft = "0%";
            studentText.style.marginLeft = "0%";
        });
        