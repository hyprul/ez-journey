function suggestPlaces(climate, environment, pace) {
    if(climate === "heat" && environment ==="city" && pace ==="relaxing"){
    	return "Austin, TX\nSanDiego, California\nNew Orleans, Louisiana"
    }
    if(climate === "heat" && environment ==="nature" && pace ==="relaxing"){
    	return "Carmel-by-the-Sea, California\nHonolulu, Hawaii\nSavannah, Georgia"
    }
        if(climate === "heat" && environment ==="city" && pace ==="on the go"){
    	return "Las Vegas, Nevada\nLos Angeles, California\nMiami, Florida"
    }
        if(climate === "heat" && environment ==="nature" && pace ==="on the go"){
    	return "Austin, TX\nPortland, Oregon\nKey West, Florida"
    }
        if(climate === "cold" && environment ==="city" && pace ==="relaxing"){
    	return "Juneau, Alaska\nDenver, Colorado\nBoston, Massachusetts"
    }

        if(climate === "cold" && environment ==="nature" && pace ==="relaxing"){
    	return "Juneau, Alaska\nDenver, Colorado\nPortland, Maine"
    }
        if(climate === "cold" && environment ==="nature" && pace ==="on the go"){
    	return "Seattle, Washington\nPortland, Maine\nBoston, Massachusetts"
    }
        if(climate === "cold" && environment ==="city" && pace ==="on the go"){
    	return "New York City, New York\nChicago, Illinois\nWashington, DC"
    }

    return "New York City, New York\nLos Angeles, CA\n, Tokyo, Japan"

}