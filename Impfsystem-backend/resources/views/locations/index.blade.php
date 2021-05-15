<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
<ul>
    @foreach ($locations as $location)
        <li><a href="locations/{{$location->id}}">
                {{$location->location_name}}</a></li>
    @endforeach
</ul>
</body>
</html>

