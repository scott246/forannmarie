DROP TABLE IF EXISTS calendar;

CREATE TABLE calendar(
  title varchar(100),
  allday bool,
  starttime text,
  endtime text,
  description text
);

INSERT INTO calendar VALUES ('1st Anniversary :)', true, 2017-10-04 0:0:0, 2017-10-05 0:0:0, 'Nathan and Ann Marie''s first anniversary!');
