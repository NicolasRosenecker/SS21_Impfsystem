<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
<h1>Locations</h1>
<ul>
    @foreach($locations as $location)
        <li>{{$location->postal_code}} {{$location->location_name}}</li>
    @endforeach
</ul>
</body>
</html>
