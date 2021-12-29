<template>
    <main>
        <Form /> 
        <RouteList />
        <Map />
    </main>
</template>

<script>
    import Form from "@/components/Form";
    import RouteList from "@/components/RouteList";
    import Map from "@/components/Map";

    export default {
        components: { Form, RouteList, Map }
    };

</script>