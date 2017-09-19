package main

import "net/http"

func main() {
	print("server is running on http://0.0.0.0:3000")
	http.ListenAndServe(":3000", http.FileServer(http.Dir(".")))
}
