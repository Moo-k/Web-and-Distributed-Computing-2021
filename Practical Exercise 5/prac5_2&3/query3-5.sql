SELECT Students.given_name, Students.family_name, Enrolments.mark FROM Students INNER JOIN Enrolments
ON Students.student_id = Enrolments.student_id INNER JOIN Subjects
ON Enrolments.subject_code = Subjects.subject_code
WHERE Subjects.subject='Computer Systems' AND Enrolments.mark <50;