DROP TABLE IF EXISTS calendar;

CREATE TABLE calendar(
  title varchar(100),
  allday bool,
  starttime char(20),
  endtime char(20),
  description text
);

/* Date format: 'YYYY-MM-DDTHH:mm:ssZ' where DD is day+1 (i.e. Christmas is Dec 26) */
INSERT INTO calendar VALUES ('1st Anniversary!', true, '2017-11-05T00:00:00Z', '2017-11-05T00:00:00Z', 'Nathan and Ann Marie''s first anniversary!');
INSERT INTO calendar VALUES ('Christmas!', true, '2017-12-26T00:00:00Z', '2017-12-26T00:00:00Z', 'When we finally see each other again :)');
