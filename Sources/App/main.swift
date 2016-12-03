import Vapor

let drop = Droplet()

//drop.get { req in
//	return try drop.view.make("landing-page")
//}

drop.get { req in
	return try drop.view.make("index", [])
}

drop.get("html") { request in
	return try drop.view.make("index.html")
}

drop.run()
