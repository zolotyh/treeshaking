package main

import "net/http"

func main() {
	print("server is running on http://0.0.0.0:3001")
	http.ListenAndServe(":3001", http.FileServer(http.Dir("./build/web")))
}
