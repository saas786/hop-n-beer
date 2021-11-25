import mad

mf = mad.MadFile("foo.mp3")
track_length_in_milliseconds = mf.total_time()  