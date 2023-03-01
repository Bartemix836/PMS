<?php
	/**
	* Database Connection
	*/
	class DbConnect {
	    private $server = 'localhost:8889';
		// private $port = ;
		private $dbname = 'react-crud-employees';
		private $user = 'root';
		private $pass = "root";

		public function connect() {
			try {
				$conn = new PDO('mysql:host=' .$this->server .';dbname=' . $this->dbname, $this->user, $this->pass);
				// $conn = new PDO("mysql:host=".SERVER_NAME.";port=3307;dbname=".DB_NAME, DB_USER, DB_PASS);
				$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				return $conn;
			} catch (\Exception $e) {
				echo "Database Error: " . $e->getMessage();
			}
		}
        
	}
	
?>