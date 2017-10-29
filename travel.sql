DROP TABLE IF EXISTS map;

CREATE TABLE map(
  location varchar(100),
  latitude numeric(7,4),
  longitude numeric(7,4),
  color char(6),
  traveler char(1)
);
/*Annie's locations*/
INSERT INTO map VALUES ('New Delhi, India',28.6139,77.2090,'0099FF','A');
INSERT INTO map VALUES ('Tehran, Iran',35.6892,51.3890,'0099FF','A');
INSERT INTO map VALUES ('Casablanca, Morocco',33.5731,-7.5898,'0099FF','A');
INSERT INTO map VALUES ('Anchorage, AK',61.2181,-149.9003,'0099FF','A');
INSERT INTO map VALUES ('Purdue University',40.4266,-86.9213,'FF9900','A');
INSERT INTO map VALUES ('Evansville, IN',37.9716,-87.5711,'FF9900','A');

/*Nathan's locations*/
INSERT INTO map VALUES ('Mishawaka, IN',41.6620,-86.1586,'666666','N');
INSERT INTO map VALUES ('Portland, OR',45.5231,-122.6765,'666666','N');
INSERT INTO map VALUES ('Seattle, WA',47.6062,-122.3321,'666666','N');
INSERT INTO map VALUES ('Chicago, IL',41.8781,-87.6298,'666666','N');
INSERT INTO map VALUES ('New York, NY',40.7128,-74.0060,'666666','N');
INSERT INTO map VALUES ('Boston, MA',42.3601,-71.0589,'666666','N');
INSERT INTO map VALUES ('Miami, FL',25.7617,-80.1918,'666666','N');
INSERT INTO map VALUES ('Atlanta, GA',33.7490,-84.3880,'666666','N');
INSERT INTO map VALUES ('Stockholm, Sweden',59.3293,18.0686,'666666','N');
INSERT INTO map VALUES ('Helsinki, Finland',60.1699,24.9384,'666666','N');
INSERT INTO map VALUES ('Oslo, Norway',59.9139,10.7522,'666666','N');
INSERT INTO map VALUES ('Copenhagen, Denmark',55.6761,12.5683,'666666','N');
INSERT INTO map VALUES ('Amsterdam, Netherlands',52.3702,4.8952,'666666','N');
INSERT INTO map VALUES ('Paris, France',48.8566,2.3522,'666666','N');
INSERT INTO map VALUES ('Berlin, Germany',52.5200,13.4050,'666666','N');
INSERT INTO map VALUES ('Sydney, Australia',-33.8688,151.2093,'666666','N');
INSERT INTO map VALUES ('Rome, Italy',41.9028,12.4964,'666666','N');
INSERT INTO map VALUES ('Cancún, Mexico',21.1619,-86.8515,'666666','N');
INSERT INTO map VALUES ('Portsmouth, NH',43.0599,-70.7553,'FF9900','N');

/*Common locations*/
INSERT INTO map VALUES ('Los Angeles, CA',34.0522,-118.2437,'00FF99','B');
INSERT INTO map VALUES ('Honolulu, HI',21.3069,-157.8583,'00FF99','B');
INSERT INTO map VALUES ('Toronto, Canada',43.6532,-79.3832,'00FF99','B');
INSERT INTO map VALUES ('London, England',51.5074,-0.1278,'00FF99','B');
INSERT INTO map VALUES ('Tokyo, Japan',35.6895,139.6917,'00FF99','B');
INSERT INTO map VALUES ('Seoul, South Korea',37.5665,126.9780,'00FF99','B');
INSERT INTO map VALUES ('Dublin, Ireland',53.3498,-6.2603,'00FF99','B');
INSERT INTO map VALUES ('Barcelona, Spain',41.3851,2.1734,'00FF99','B');
INSERT INTO map VALUES ('Beijing, China',39.9042,116.4074,'00FF99','B');
