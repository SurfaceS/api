/* eslint-disable */ 
const nock = require('nock');

nock('https://www.omdbapi.com:443', { 'encodedQueryParams': true })
  .persist()
  .get('/')
  .query({ 'i': 'tt0462538', 'plot': 'full', 'r': 'json' })
  .reply(200, { 'Title': 'The Simpsons Movie', 'Year': '2007', 'Rated': 'PG-13', 'Released': '27 Jul 2007', 'Runtime': '87 min', 'Genre': 'Animation, Adventure, Comedy', 'Director': 'David Silverman', 'Writer': 'James L. Brooks (screenplay), Matt Groening (screenplay), Al Jean (screenplay), Ian Maxtone-Graham (screenplay), George Meyer (screenplay), David Mirkin (screenplay), Mike Reiss (screenplay), Mike Scully (screenplay), Matt Selman (screenplay), John Swartzwelder (screenplay), Jon Vitti (screenplay), Joel H. Cohen (consultant writer), John Frink (consultant writer), Tim Long (consultant writer), Michael Price (consultant writer)', 'Actors': 'Dan Castellaneta, Julie Kavner, Nancy Cartwright, Yeardley Smith', 'Plot': 'Homer adopts a pig who\'s run away from Krusty Burger after Krusty tried to have him slaughtered, naming the pig \'Spider Pig.\' At the same time, the lake is protected after the audience sink the barge Green Day are on with garbage after they mention the environment. Meanwhile, Spider Pig\'s waste has filled up a silo in just 2 days, apparently with Homer\'s help. Homer can\'t get to the dump quickly so dumps the silo in the lake, polluting it. Russ Cargill, the villainous boss of the EPA, gives Arnold Schwarzenegger 5 options, forcing him to choose 4 (which is, unfortunately, to destroy Springfield) and putting a dome over Springfield to prevent evacuation. Homer, however, has escaped, along with his family. Can he stop the evil Cargill from annihilating his home town, and his family, who have been forced to return to Springfield?', 'Language': 'English', 'Country': 'USA', 'Awards': 'Nominated for 1 Golden Globe. Another 5 wins & 33 nominations.', 'Poster': 'https://m.media-amazon.com/images/M/MV5BMTgxMDczMTA5N15BMl5BanBnXkFtZTcwMzk1MzMzMw@@._V1_SX300.jpg', 'Ratings': [{ 'Source': 'Internet Movie Database', 'Value': '7.3/10' }, { 'Source': 'Rotten Tomatoes', 'Value': '88%' }, { 'Source': 'Metacritic', 'Value': '80/100' }], 'Metascore': '80', 'imdbRating': '7.3', 'imdbVotes': '298,859', 'imdbID': 'tt0462538', 'Type': 'movie', 'DVD': '18 Dec 2007', 'BoxOffice': '$183,100,000', 'Production': '20th Century Fox', 'Website': 'N/A', 'Response': 'True' });

nock('https://www.omdbapi.com:443', { 'encodedQueryParams': true })
  .persist()
  .get('/')
  .query({"plot":"full","r":"json","t":"Homeland"})
  .reply(200, {"Title":"Homeland","Year":"2011–2020","Rated":"TV-MA","Released":"02 Oct 2011","Runtime":"55 min","Genre":"Crime, Drama, Mystery, Thriller","Director":"N/A","Writer":"Alex Gansa, Howard Gordon","Actors":"Claire Danes, Mandy Patinkin, Rupert Friend, Maury Sterling","Plot":"Carrie Mathison, a CIA operations officer, is on probation after carrying out an unauthorized operation in Iraq. As a result, she has been reassigned to the Counter terrorism center. Whilst in Iraq, she was warned that an American prisoner had been turned by Al-Qaeda. When Nicholas Brody, a U.S. Marine Sergeant, is rescued after being held hostage since 2003, she suspects that he is the one. While Brody is received home as a war hero, Carrie goes to any lengths necessary to catch him out.","Language":"English","Country":"USA","Awards":"Won 5 Golden Globes. Another 55 wins & 172 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BYjY2ODA0NjYtMzlkMi00ZjY5LThiNjUtNzZjYzgxNjc0MzQzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.3/10"}],"Metascore":"N/A","imdbRating":"8.3","imdbVotes":"288,641","imdbID":"tt1796960","Type":"series","totalSeasons":"8","Response":"True"});

nock('https://www.omdbapi.com:443', { 'encodedQueryParams': true })
  .persist()
  .get('/')
  .query({"plot":"full","r":"json","t":"Ben 10","y":"2016"})
  .reply(200, {"Title":"Ben 10","Year":"2016–","Rated":"TV-Y7-FV","Released":"10 Apr 2017","Runtime":"12 min","Genre":"Animation, Short, Action, Adventure, Comedy, Family, Sci-Fi","Director":"N/A","Writer":"Man of Action","Actors":"Montse Hernandez, Tara Strong, David Kaye, Roger Craig Smith","Plot":"Ben 10 is the fifth iteration of the Ben 10 franchise. It serves as a reboot of the television series loosely based upon the original series.","Language":"English","Country":"USA","Awards":"3 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BZDQyMGI3MjctNWIzYy00MmYzLWJhODEtOGE0NWM2OGU3NDI1XkEyXkFqcGdeQXVyNjkzNTYxNjI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"2.5/10"}],"Metascore":"N/A","imdbRating":"2.5","imdbVotes":"1,952","imdbID":"tt6148376","Type":"series","totalSeasons":"2","Response":"True"});

nock('https://www.omdbapi.com:443', { 'encodedQueryParams': true })
  .persist()
  .get('/')
  .query({"plot":"full","r":"json","t":"Ben 10","y":"2005"})
  .reply(200, {"Title":"Ben 10","Year":"2005–2008","Rated":"TV-Y7-FV","Released":"27 Dec 2005","Runtime":"30 min","Genre":"Animation, Action, Adventure, Family, Sci-Fi","Director":"N/A","Writer":"Joe Casey, Joe Kelly, Man of Action, Duncan Rouleau, Steven T. Seagle","Actors":"Tara Strong, Paul Eiding, Meagan Moore, Dee Bradley Baker","Plot":"The story of Ben Tennyson, a typical kid who becomes very atypical after he discovers the Omnitrix, a mysterious alien device with the power to transform the wearer into ten different alien species.","Language":"English","Country":"USA","Awards":"1 win & 2 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMGU1MGQ1YTgtZTdkYi00ODI3LWFjMzItYmZkN2IxMmM0M2M4XkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.2/10"}],"Metascore":"N/A","imdbRating":"7.2","imdbVotes":"11,955","imdbID":"tt0760437","Type":"series","totalSeasons":"4","Response":"True"});

nock('https://www.omdbapi.com:443', { 'encodedQueryParams': true })
  .persist()
  .get('/')
  .query({"page":"1","r":"json","s":"The Grinch","y":"2018","type":"movie"})
  .reply(200, {"Search":[{"Title":"The Grinch","Year":"2018","imdbID":"tt2709692","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYmE5Yjg0MzktYzgzMi00YTFiLWJjYTItY2M5MmI1ODI4MDY3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},{"Title":"The Grinch","Year":"2018","imdbID":"tt2709692","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYmE5Yjg0MzktYzgzMi00YTFiLWJjYTItY2M5MmI1ODI4MDY3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},{"Title":"The Grinch - First Look","Year":"2018","imdbID":"tt9298258","Type":"movie","Poster":"N/A"}],"totalResults":"3","Response":"True"});

nock('https://www.omdbapi.com:443', { 'encodedQueryParams': true })
  .persist()
  .get('/')
  .query({"plot":"full","i":"tt2709692","r":"json"})
  .reply(200, {"Title":"The Grinch","Year":"2018","Rated":"PG","Released":"09 Nov 2018","Runtime":"85 min","Genre":"Animation, Comedy, Family, Fantasy","Director":"Yarrow Cheney, Scott Mosier","Writer":"Michael LeSieur (screenplay by), Tommy Swerdlow (screenplay by), Dr. Seuss (based on the book \"How The Grinch Stole Christmas\" by)","Actors":"Benedict Cumberbatch, Cameron Seely, Rashida Jones, Pharrell Williams","Plot":"A grumpy Grinch (Benedict Cumberbatch) plots to ruin Christmas for the village of Whoville.","Language":"English","Country":"France, Japan, USA","Awards":"1 win & 18 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BYmE5Yjg0MzktYzgzMi00YTFiLWJjYTItY2M5MmI1ODI4MDY3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.3/10"},{"Source":"Rotten Tomatoes","Value":"59%"},{"Source":"Metacritic","Value":"51/100"}],"Metascore":"51","imdbRating":"6.3","imdbVotes":"43,458","imdbID":"tt2709692","Type":"movie","DVD":"05 Feb 2019","BoxOffice":"N/A","Production":"Universal Pictures","Website":"N/A","Response":"True"});

nock('https://www.omdbapi.com:443', { 'encodedQueryParams': true })
  .persist()
  .get('/')
  .query({"Season":"1","i":"tt1796960","r":"json"})
  .reply(200, {"Title":"Homeland","Season":"1","totalSeasons":"8","Episodes":[{"Title":"Pilot","Released":"2011-10-02","Episode":"1","imdbRating":"8.4","imdbID":"tt1811020"},{"Title":"Grace","Released":"2011-10-09","Episode":"2","imdbRating":"8.0","imdbID":"tt1988308"},{"Title":"Semper I","Released":"2011-10-23","Episode":"4","imdbRating":"7.8","imdbID":"tt2011518"},{"Title":"Blind Spot","Released":"2011-10-30","Episode":"5","imdbRating":"8.4","imdbID":"tt2023998"},{"Title":"The Good Soldier","Released":"2011-11-06","Episode":"6","imdbRating":"8.5","imdbID":"tt2024865"},{"Title":"The Weekend","Released":"2011-11-13","Episode":"7","imdbRating":"8.9","imdbID":"tt2043149"},{"Title":"Achilles Heel","Released":"2011-11-20","Episode":"8","imdbRating":"8.4","imdbID":"tt2041952"},{"Title":"Crossfire","Released":"2011-11-27","Episode":"9","imdbRating":"8.2","imdbID":"tt2081742"},{"Title":"Representative Brody","Released":"2011-12-04","Episode":"10","imdbRating":"8.3","imdbID":"tt2081741"},{"Title":"The Vest","Released":"2011-12-11","Episode":"11","imdbRating":"8.7","imdbID":"tt2084389"},{"Title":"Marine One","Released":"2011-12-18","Episode":"12","imdbRating":"9.1","imdbID":"tt2084390"}],"Response":"True"});

nock('https://www.omdbapi.com:443', { 'encodedQueryParams': true })
  .persist()
  .get('/')
  .query({"Season":"2","i":"tt1796960","r":"json"})
  .reply(200, {"Title":"Homeland","Season":"2","totalSeasons":"8","Episodes":[{"Title":"The Smile","Released":"2012-09-30","Episode":"1","imdbRating":"8.5","imdbID":"tt2100961"},{"Title":"Beirut Is Back","Released":"2012-10-07","Episode":"2","imdbRating":"9.0","imdbID":"tt2385581"},{"Title":"State of Independence","Released":"2012-10-14","Episode":"3","imdbRating":"8.3","imdbID":"tt2385583"},{"Title":"New Car Smell","Released":"2012-10-21","Episode":"4","imdbRating":"8.8","imdbID":"tt2385585"},{"Title":"Q&A","Released":"2012-10-28","Episode":"5","imdbRating":"9.1","imdbID":"tt2325080"},{"Title":"A Gettysburg Address","Released":"2012-11-04","Episode":"6","imdbRating":"8.4","imdbID":"tt2352340"},{"Title":"The Clearing","Released":"2012-11-11","Episode":"7","imdbRating":"7.9","imdbID":"tt2355180"},{"Title":"I'll Fly Away","Released":"2012-11-18","Episode":"8","imdbRating":"8.3","imdbID":"tt2368314"},{"Title":"Two Hats","Released":"2012-11-25","Episode":"9","imdbRating":"8.6","imdbID":"tt2368332"},{"Title":"Broken Hearts","Released":"2012-12-02","Episode":"10","imdbRating":"8.7","imdbID":"tt2408792"},{"Title":"The Choice","Released":"2012-12-16","Episode":"12","imdbRating":"9.3","imdbID":"tt2408794"}],"Response":"True"});

nock('https://www.omdbapi.com:443', { 'encodedQueryParams': true })
  .persist()
  .get('/')
  .query({"Season":"4","i":"tt1796960","r":"json"})
  .reply(200, {"Title":"Homeland","Season":"4","totalSeasons":"8","Episodes":[{"Title":"The Drone Queen","Released":"2014-10-05","Episode":"1","imdbRating":"8.4","imdbID":"tt3284012"},{"Title":"Trylon and Perisphere","Released":"2014-10-05","Episode":"2","imdbRating":"7.7","imdbID":"tt3505184"},{"Title":"Shalwar Kameez","Released":"2014-10-12","Episode":"3","imdbRating":"8.0","imdbID":"tt3505188"},{"Title":"Iron in the Fire","Released":"2014-10-19","Episode":"4","imdbRating":"8.0","imdbID":"tt3505186"},{"Title":"About a Boy","Released":"2014-10-26","Episode":"5","imdbRating":"7.7","imdbID":"tt3505192"},{"Title":"From A to B and Back Again","Released":"2014-11-02","Episode":"6","imdbRating":"9.0","imdbID":"tt3921048"},{"Title":"Redux","Released":"2014-11-09","Episode":"7","imdbRating":"8.8","imdbID":"tt3977324"},{"Title":"Halfway to a Donut","Released":"2014-11-16","Episode":"8","imdbRating":"9.1","imdbID":"tt3990534"},{"Title":"There's Something Else Going On","Released":"2014-11-23","Episode":"9","imdbRating":"9.6","imdbID":"tt4023224"},{"Title":"13 Hours in Islamabad","Released":"2014-12-07","Episode":"10","imdbRating":"9.4","imdbID":"tt3984158"},{"Title":"Krieg Nicht Lieb","Released":"2014-12-14","Episode":"11","imdbRating":"8.8","imdbID":"tt3960094"},{"Title":"Long Time Coming","Released":"2014-12-21","Episode":"12","imdbRating":"5.6","imdbID":"tt3952170"}],"Response":"True"});

nock('https://www.omdbapi.com:443', { 'encodedQueryParams': true })
  .persist()
  .get('/')
  .query({"Season":"7","i":"tt1796960","r":"json"})
  .reply(200, {"Title":"Homeland","Season":"7","totalSeasons":"8","Episodes":[{"Title":"Enemy of the State","Released":"2018-02-11","Episode":"1","imdbRating":"7.7","imdbID":"tt5959082"},{"Title":"Rebel Rebel","Released":"2018-02-18","Episode":"2","imdbRating":"7.7","imdbID":"tt7319318"},{"Title":"Standoff","Released":"2018-02-25","Episode":"3","imdbRating":"7.7","imdbID":"tt7367134"},{"Title":"Like Bad at Things","Released":"2018-03-04","Episode":"4","imdbRating":"8.7","imdbID":"tt7367140"},{"Title":"Species Jump","Released":"2018-03-18","Episode":"6","imdbRating":"8.4","imdbID":"tt7386408"},{"Title":"Andante","Released":"2018-03-25","Episode":"7","imdbRating":"8.0","imdbID":"tt7386416"},{"Title":"Lies, Amplifiers, F**king Twitter","Released":"2018-04-01","Episode":"8","imdbRating":"8.4","imdbID":"tt7386420"},{"Title":"Useful Idiot","Released":"2018-04-08","Episode":"9","imdbRating":"8.8","imdbID":"tt7386422"},{"Title":"All In","Released":"2018-04-22","Episode":"11","imdbRating":"8.9","imdbID":"tt7319316"},{"Title":"Paean to the People","Released":"2018-04-29","Episode":"12","imdbRating":"8.5","imdbID":"tt7126668"}],"Response":"True"});

nock('https://www.omdbapi.com:443', { 'encodedQueryParams': true })
  .persist()
  .get('/')
  .query({"Season":"3","i":"tt1796960","r":"json"})
  .reply(200, {"Title":"Homeland","Season":"3","totalSeasons":"8","Episodes":[{"Title":"Tin Man Is Down","Released":"2013-09-29","Episode":"1","imdbRating":"7.9","imdbID":"tt2473824"},{"Title":"Uh... Oh... Ah...","Released":"2013-10-06","Episode":"2","imdbRating":"7.3","imdbID":"tt2916284"},{"Title":"Tower of David","Released":"2013-10-13","Episode":"3","imdbRating":"7.3","imdbID":"tt2916290"},{"Title":"Game On","Released":"2013-10-20","Episode":"4","imdbRating":"8.2","imdbID":"tt2916300"},{"Title":"The Yoga Play","Released":"2013-10-27","Episode":"5","imdbRating":"8.1","imdbID":"tt2916302"},{"Title":"Still Positive","Released":"2013-11-03","Episode":"6","imdbRating":"8.0","imdbID":"tt2916304"},{"Title":"A Red Wheelbarrow","Released":"2013-11-17","Episode":"8","imdbRating":"8.5","imdbID":"tt2916310"},{"Title":"One Last Thing","Released":"2013-11-24","Episode":"9","imdbRating":"8.6","imdbID":"tt2916312"},{"Title":"Good Night","Released":"2013-12-01","Episode":"10","imdbRating":"8.9","imdbID":"tt2916314"},{"Title":"Big Man in Tehran","Released":"2013-12-08","Episode":"11","imdbRating":"9.3","imdbID":"tt2916316"},{"Title":"The Star","Released":"2013-12-15","Episode":"12","imdbRating":"8.5","imdbID":"tt2916318"}],"Response":"True"});

nock('https://www.omdbapi.com:443', { 'encodedQueryParams': true })
  .persist()
  .get('/')
  .query({"Season":"6","i":"tt1796960","r":"json"})
  .reply(200, {"Title":"Homeland","Season":"6","totalSeasons":"8","Episodes":[{"Title":"Fair Game","Released":"2017-01-15","Episode":"1","imdbRating":"7.1","imdbID":"tt5261748"},{"Title":"The Man in the Basement","Released":"2017-01-22","Episode":"2","imdbRating":"7.3","imdbID":"tt5314806"},{"Title":"The Covenant","Released":"2017-01-29","Episode":"3","imdbRating":"7.5","imdbID":"tt5314802"},{"Title":"A Flash of Light","Released":"2017-02-12","Episode":"4","imdbRating":"7.9","imdbID":"tt5314810"},{"Title":"Casus Belli","Released":"2017-02-19","Episode":"5","imdbRating":"8.8","imdbID":"tt5314818"},{"Title":"The Return","Released":"2017-02-26","Episode":"6","imdbRating":"8.2","imdbID":"tt5314816"},{"Title":"Imminent Risk","Released":"2017-03-05","Episode":"7","imdbRating":"7.8","imdbID":"tt5314822"},{"Title":"alt.truth","Released":"2017-03-12","Episode":"8","imdbRating":"8.4","imdbID":"tt5314830"},{"Title":"Sock Puppets","Released":"2017-03-19","Episode":"9","imdbRating":"8.4","imdbID":"tt5314824"},{"Title":"The Flag House","Released":"2017-03-26","Episode":"10","imdbRating":"8.5","imdbID":"tt5314826"},{"Title":"R Is for Romeo","Released":"2017-04-02","Episode":"11","imdbRating":"8.9","imdbID":"tt5314832"},{"Title":"America First","Released":"2017-04-09","Episode":"12","imdbRating":"8.2","imdbID":"tt5314828"}],"Response":"True"});

nock('https://www.omdbapi.com:443', { 'encodedQueryParams': true })
  .persist()
  .get('/')
  .query({"Season":"5","i":"tt1796960","r":"json"})
  .reply(200, {"Title":"Homeland","Season":"5","totalSeasons":"8","Episodes":[{"Title":"The Tradition of Hospitality","Released":"2015-10-11","Episode":"2","imdbRating":"8.5","imdbID":"tt4791472"},{"Title":"Super Powers","Released":"2015-10-18","Episode":"3","imdbRating":"8.3","imdbID":"tt4847018"},{"Title":"Why Is This Night Different?","Released":"2015-10-25","Episode":"4","imdbRating":"8.8","imdbID":"tt4840674"},{"Title":"Better Call Saul","Released":"2015-11-01","Episode":"5","imdbRating":"8.2","imdbID":"tt4847022"},{"Title":"Parabiosis","Released":"2015-11-08","Episode":"6","imdbRating":"8.2","imdbID":"tt4847026"},{"Title":"Oriole","Released":"2015-11-15","Episode":"7","imdbRating":"8.1","imdbID":"tt4847030"},{"Title":"All About Allison","Released":"2015-11-22","Episode":"8","imdbRating":"8.2","imdbID":"tt4847038"},{"Title":"The Litvinov Ruse","Released":"2015-11-29","Episode":"9","imdbRating":"9.1","imdbID":"tt4847040"},{"Title":"New Normal","Released":"2015-12-06","Episode":"10","imdbRating":"8.5","imdbID":"tt4847044"},{"Title":"A False Glimmer","Released":"2015-12-20","Episode":"12","imdbRating":"7.8","imdbID":"tt4626230"}],"Response":"True"});

nock('https://www.omdbapi.com:443', { 'encodedQueryParams': true })
  .persist()
  .get('/')
  .query({"Season":"8","i":"tt1796960","r":"json"})
  .reply(200, {"Title":"Homeland","Season":"8","totalSeasons":"8","Episodes":[{"Title":"Deception Indicated","Released":"2020-02-09","Episode":"1","imdbRating":"8.2","imdbID":"tt5959084"},{"Title":"Catch and Release","Released":"2020-02-16","Episode":"2","imdbRating":"8.2","imdbID":"tt8355876"},{"Title":"False Friends","Released":"2020-02-23","Episode":"3","imdbRating":"N/A","imdbID":"tt8355878"},{"Title":"Chalk One Up","Released":"2020-03-01","Episode":"4","imdbRating":"N/A","imdbID":"tt8355882"},{"Title":"Chalk Two Down","Released":"2020-03-08","Episode":"5","imdbRating":"N/A","imdbID":"tt8355884"},{"Title":"Two Minutes","Released":"2020-03-15","Episode":"6","imdbRating":"N/A","imdbID":"tt8355888"},{"Title":"F**ker Shot Me","Released":"2020-03-22","Episode":"7","imdbRating":"N/A","imdbID":"tt8355890"},{"Title":"Threnody(s)","Released":"2020-03-29","Episode":"8","imdbRating":"N/A","imdbID":"tt8355892"},{"Title":"Episode #8.9","Released":"N/A","Episode":"9","imdbRating":"N/A","imdbID":"tt8355894"},{"Title":"Designated Driver","Released":"2020-04-12","Episode":"10","imdbRating":"N/A","imdbID":"tt8355896"},{"Title":"The English Teacher","Released":"2020-04-19","Episode":"11","imdbRating":"N/A","imdbID":"tt8355898"},{"Title":"Episode #8.12","Released":"2020-04-26","Episode":"12","imdbRating":"N/A","imdbID":"tt7126670"}],"Response":"True"});

nock('https://www.omdbapi.com:443', { 'encodedQueryParams': true })
  .persist()
  .get('/')
  .query({"i":"tt2325080","plot":"full","r":"json"})
  .reply(200, {"Title":"Q&A","Year":"2012","Rated":"TV-MA","Released":"28 Oct 2012","Season":"2","Episode":"5","Runtime":"56 min","Genre":"Crime, Drama, Mystery, Thriller","Director":"Lesli Linka Glatter","Writer":"Alex Gansa (developed for american television by), Howard Gordon (developed for american television by), Gideon Raff (based on the original Israeli series \"Prisoners of War\" by), Henry Bromell","Actors":"Claire Danes, Damian Lewis, Morena Baccarin, David Harewood","Plot":"Brody finds himself prisoner again, but this time it's on American soil. Meanwhile, Carrie is forced to play second fiddle after her rash judgment call at the hotel as Estes is busy keeping Jessica off their trail.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BMTM2Nzk0NTYxOV5BMl5BanBnXkFtZTcwODg4NDg1OA@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.1/10"}],"Metascore":"N/A","imdbRating":"9.1","imdbVotes":"2977","imdbID":"tt2325080","seriesID":"tt1796960","Type":"episode","Response":"True"});

nock('https://www.omdbapi.com:443', { 'encodedQueryParams': true })
  .persist()
  .get('/')
  .query({"i":"tt3581932","plot":"full","r":"json"})
  .reply(200, {"Title":"And Then There Were None","Year":"2015","Rated":"TV-14","Released":"26 Dec 2015","Runtime":"58 min","Genre":"Crime, Drama, Mystery, Thriller","Director":"N/A","Writer":"N/A","Actors":"Maeve Dermody, Charles Dance, Toby Stephens, Burn Gorman","Plot":"It's 1939 and Europe teeters on the brink of war. Ten strangers are invited to Indian Island, an isolated rock near the Devon coast in southern England. Cut off from the mainland, with their generous hosts Mr and Mrs U.N. Owen mysteriously absent, they are each accused of a terrible crime. As each member of the party starts to die one by one, the survivors realize that one of them is a killer and start to turn on each other.","Language":"English","Country":"UK","Awards":"1 win & 5 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNjIzZDg2YWUtZGEwOS00OGM5LTgwZTgtMGVhMTFiZDhjMjExXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"}],"Metascore":"N/A","imdbRating":"8.0","imdbVotes":"27,724","imdbID":"tt3581932","Type":"series","totalSeasons":"1","Response":"True"});

nock('https://www.omdbapi.com:443', { 'encodedQueryParams': true })
  .persist()
  .get('/')
  .query({"Season":"1","i":"tt3581932","r":"json"})
  .reply(200, {"Title":"And Then There Were None","Season":"1","totalSeasons":"1","Episodes":[{"Title":"Episode #1.1","Released":"N/A","Episode":"1","imdbRating":"N/A","imdbID":"tt3591512"},{"Title":"Episode #1.2","Released":"2015-12-27","Episode":"2","imdbRating":"8.6","imdbID":"tt3595914"},{"Title":"Episode #1.3","Released":"2015-12-28","Episode":"3","imdbRating":"8.9","imdbID":"tt3595916"}],"Response":"True"});

nock('https://www.omdbapi.com:443', { 'encodedQueryParams': true })
  .persist()
  .get('/')
  .query({"i":"tt3591512","plot":"full","r":"json"})
  .reply(200, {"Title":"Episode #1.1","Year":"2015","Rated":"N/A","Released":"N/A","Season":"1","Episode":"1","Runtime":"N/A","Genre":"Mystery","Director":"N/A","Writer":"Agatha Christie (novel), Sarah Phelps (adaptation)","Actors":"N/A","Plot":"Ten strangers are marooned on an island, and they start to die one by one.","Language":"N/A","Country":"N/A","Awards":"N/A","Poster":"N/A","Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt3591512","seriesID":"tt3581932","Type":"episode","Response":"True"});

nock('https://www.omdbapi.com:443', { 'encodedQueryParams': true })
  .persist()
  .get('/')
  .query({"i":"tt3595914","plot":"full","r":"json"})
  .reply(200, {"Title":"Episode #1.2","Year":"2015","Rated":"TV-14","Released":"27 Dec 2015","Season":"1","Episode":"2","Runtime":"55 min","Genre":"Crime, Drama, Mystery","Director":"Craig Viveiros, Basi Akpabio, Rebecca Keane","Writer":"Sarah Phelps (screenplay), Agatha Christie (novel)","Actors":"Maeve Dermody, Charles Dance, Miranda Richardson, Toby Stephens","Plot":"Accusations fly amongst the eight survivors with ex-mercenary soldier Philip Lombard admitting his guilt to Vera and religious spinster Emily Brent making excuses for her accusation. A search party is organized to hunt the killer. Owen, in vain and former General MacArthur is despairing, seeming to lose his mind - and then his life. Two more murders follow, leaving only five little soldiers on the table and it is apparent that the killer is one of the five remaining guests.","Language":"English","Country":"UK","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BZWU3YWRlZWMtZWI5NC00N2U4LWI4NGUtNjZkODFjZDJkNGEyXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.6/10"}],"Metascore":"N/A","imdbRating":"8.6","imdbVotes":"487","imdbID":"tt3595914","seriesID":"tt3581932","Type":"episode","Response":"True"});

nock('https://www.omdbapi.com:443', { 'encodedQueryParams': true })
  .persist()
  .get('/')
  .query({"i":"tt3595916","plot":"full","r":"json"})
  .reply(200, {"Title":"Episode #1.3","Year":"2015","Rated":"N/A","Released":"28 Dec 2015","Season":"1","Episode":"3","Runtime":"57 min","Genre":"Crime, Drama, Mystery","Director":"Craig Viveiros, Basi Akpabio, Rebecca Keane","Writer":"Sarah Phelps (screenplay), Agatha Christie (novel)","Actors":"Maeve Dermody, Burn Gorman, Charles Dance, Toby Stephens","Plot":"Tempers fray as night falls and Judge Wargrave explains the reason for his being brought to the island. Next day there is another soldier missing and hysteria and suspicion take hold, relieved by drunken partying. Soon there are only two guests left, each believing the other to be the serial killer - unless, of course, the real murderer is still alive. Either way when the boatman comes to collect the guests he will find that the rhyme has come true.","Language":"English","Country":"UK","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BZDhlZTkwMjItODFkOS00NDk1LWI1NGMtM2Y0YTk5NzY4M2U1XkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.9/10"}],"Metascore":"N/A","imdbRating":"8.9","imdbVotes":"291","imdbID":"tt3595916","seriesID":"tt3581932","Type":"episode","Response":"True"});

nock('https://www.omdbapi.com:443', { 'encodedQueryParams': true })
  .persist()
  .get('/')
  .query({"i":"tt1796960","plot":"full","r":"json"})
  .reply(200, {"Title":"Homeland","Year":"2011–2020","Rated":"TV-MA","Released":"02 Oct 2011","Runtime":"55 min","Genre":"Crime, Drama, Mystery, Thriller","Director":"N/A","Writer":"Alex Gansa, Howard Gordon","Actors":"Claire Danes, Mandy Patinkin, Rupert Friend, Maury Sterling","Plot":"Carrie Mathison, a CIA operations officer, is on probation after carrying out an unauthorized operation in Iraq. As a result, she has been reassigned to the Counter terrorism center. Whilst in Iraq, she was warned that an American prisoner had been turned by Al-Qaeda. When Nicholas Brody, a U.S. Marine Sergeant, is rescued after being held hostage since 2003, she suspects that he is the one. While Brody is received home as a war hero, Carrie goes to any lengths necessary to catch him out.","Language":"English","Country":"USA","Awards":"Won 5 Golden Globes. Another 55 wins & 172 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BYjY2ODA0NjYtMzlkMi00ZjY5LThiNjUtNzZjYzgxNjc0MzQzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.3/10"}],"Metascore":"N/A","imdbRating":"8.3","imdbVotes":"290,809","imdbID":"tt1796960","Type":"series","totalSeasons":"8","Response":"True"});

nock('https://www.omdbapi.com:443', { 'encodedQueryParams': true })
  .persist()
  .get('/')
  .query({"i":"tt3388032","plot":"full","r":"json"})
  .reply(200, {"Title":"Proof of Concept","Year":"2014","Rated":"TV-MA","Released":"18 May 2014","Season":"1","Episode":"7","Runtime":"28 min","Genre":"Comedy","Director":"Mike Judge","Writer":"Clay Tarver, Mike Judge (created by), John Altschuler (created by), Dave Krinsky (created by)","Actors":"Thomas Middleditch, T.J. Miller, Josh Brener, Martin Starr","Plot":"Richard has trouble getting Pied Piper ready in time for the TechCrunch Disrupt, while Erlich realizes he slept with the wife of one of the judges of the contest.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BYjgxNzViZTAtYTVlMS00MzU3LWIzZWEtZGZkNDRjNjQwYzA3XkEyXkFqcGdeQXVyMjg2MTMyNTM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.6/10"}],"Metascore":"N/A","imdbRating":"8.6","imdbVotes":"1581","imdbID":"tt3388032","seriesID":"tt2575988","Type":"episode","Response":"True"});

nock('https://www.omdbapi.com:443', { 'encodedQueryParams': true })
  .persist()
  .get('/')
  .query({"i":"mocked-outage-id","plot":"full","r":"json"})
  .reply(503);

nock('https://www.omdbapi.com:443', { 'encodedQueryParams': true })
  .persist()
  .get('/')
  .query({"i":"tt0678478","plot":"full","r":"json"})
  .reply(200, {"Title":"Cute Poison","Year":"2005","Rated":"TV-14","Released":"12 Sep 2005","Season":"1","Episode":"4","Runtime":"44 min","Genre":"Action, Crime, Drama, Mystery, Thriller","Director":"Matt Earl Beesley","Writer":"Paul Scheuring (created by), Matt Olmstead","Actors":"Dominic Purcell, Wentworth Miller, Robin Tunney, Peter Stormare","Plot":"Michael gets more of the tools and people he needs, but someone very high up has taken notice and started wondering what he's up to.","Language":"English, Spanish","Country":"N/A","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BMzY1MzYwNDczN15BMl5BanBnXkFtZTgwMTk2NDg0MjE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.7/10"}],"Metascore":"N/A","imdbRating":"8.7","imdbVotes":"3307","imdbID":"tt0678478","seriesID":"tt0455275","Type":"episode","Response":"True"});


nock('https://www.omdbapi.com:443', {"encodedQueryParams":true})
  .persist()
  .get('/')
  .query({"page":"1","r":"json","s":"The%20Matrix%20Reloaded","type":"movie","y":"2003"})
  .reply(200, {"Search":[{"Title":"The Matrix Reloaded","Year":"2003","imdbID":"tt0234215","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"},{"Title":"Decoded: The Making of 'The Matrix Reloaded'","Year":"2003","imdbID":"tt1074193","Type":"movie","Poster":"N/A"},{"Title":"The Matrix Reloaded: Pre-Load","Year":"2003","imdbID":"tt5319604","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BODc1NzlmZTQtNWQ1Ni00NmU4LTgyZDAtODEwYzIwODQzMmUyXkEyXkFqcGdeQXVyODA1NjQ0OTY@._V1_SX300.jpg"},{"Title":"The Matrix Reloaded: Get Me an Exit","Year":"2003","imdbID":"tt5319618","Type":"movie","Poster":"N/A"}],"totalResults":"4","Response":"True"});


nock('https://www.omdbapi.com:443', {"encodedQueryParams":true})
  .persist()
  .get('/')
  .query({"i":"tt0234215","plot":"full","r":"json"})
  .reply(200, {"Title":"The Matrix Reloaded","Year":"2003","Rated":"R","Released":"15 May 2003","Runtime":"138 min","Genre":"Action, Sci-Fi","Director":"Lana Wachowski, Lilly Wachowski","Writer":"Lilly Wachowski, Lana Wachowski, Lilly Wachowski (characters), Lana Wachowski (characters)","Actors":"Ray Anthony, Christine Anu, Andy Arness, Alima Ashton-Sheibu","Plot":"Six months after the events depicted in The Matrix, Neo has proved to be a good omen for the free humans, as more and more humans are being freed from the matrix and brought to Zion, the one and only stronghold of the Resistance. Neo himself has discovered his superpowers including super speed, ability to see the codes of the things inside the matrix, and a certain degree of precognition. But a nasty piece of news hits the human resistance: 250,000 machine sentinels are digging to Zion and would reach them in 72 hours. As Zion prepares for the ultimate war, Neo, Morpheus and Trinity are advised by the Oracle to find the Keymaker who would help them reach the Source. Meanwhile Neo's recurrent dreams depicting Trinity's death have got him worried and as if it was not enough, Agent Smith has somehow escaped deletion, has become more powerful than before and has chosen Neo as his next target.","Language":"English, French","Country":"USA","Awards":"8 wins & 34 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.2/10"},{"Source":"Rotten Tomatoes","Value":"73%"},{"Source":"Metacritic","Value":"62/100"}],"Metascore":"62","imdbRating":"7.2","imdbVotes":"500,647","imdbID":"tt0234215","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"});
