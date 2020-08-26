<form action="inc/process.php" method="POST" class="form-horizontal">

	<!-- NAME -->
	<div id="name-group" class="row form-group">
		<label for="name" class="col-sm-3">Name</label>
		<div class="col-sm-9">
			<input type="text" class="form-control" name="name" placeholder="Enter your name">
		</div>
		<!-- errors will go here -->
	</div>

	<!-- EMAIL -->
	<div id="email-group" class="row form-group">
		<label for="email" class="col-sm-3">Email</label>
		<div class="col-sm-9">
			<input type="text" class="form-control" name="email" placeholder="Your email address">
		</div>
		<!-- errors will go here -->
	</div>

	<div id="service-group" class="row form-group">
		<label for="service" class="col-sm-3">Service</label>
		<div class="col-sm-9">
			<select name="service" class="form-control">
				<option value="">Please choose...</option>
				<option value="check-up">Check Up</option>
				<option value="cleaning">Cleaning</option>
				<option value="other">Other</option>
			</select>
		</div>
		<!-- errors will go here -->
	</div>

	<!-- PHONE -->
	<div id="phone-group" class="row form-group">
		<label for="phone" class="col-sm-3">Phone</label>
		<div class="col-sm-9">
			<input type="tel" class="form-control" name="phone" placeholder="519-123-4567">
		</div>
		<!-- errors will go here -->
	</div>

	<div id="message-group" class="row form-group">
		<label for="message" class="col-sm-3">Message</label>
		<div class="col-sm-9">
			<textarea name="message" placeholder="Your message here..." class="form-control"></textarea>
		</div>
		<!-- errors will go here -->
	</div>

	<div class="row form-group">
		<div class="col-sm-3"><span class="sr-only">Submit</span></div>
		<div class="col-sm-9">
			<button type="submit" class="btn btn-primary">Submit <span class="fa fa-arrow-right"></span></button>
		</div>
	</div>

</form>
