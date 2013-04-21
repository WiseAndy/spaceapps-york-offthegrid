<?php 
	class dao_question {
		public $id;
		public $question;
		public $helptext;
		public $cardinality;
		public $created;
		public $deleted;
	}

	class dao_choice {
		public $id;
		public $question_id;
		public $choice;
		public $score;
		public $created;
		public $deleted;
	}

	class dao_tag {
		public $id;
		public $name;
		public $created;
		public $deleted;
	}

	class dao_question_tag {
		public $question_id;
		public $tag_id;
	}
?>