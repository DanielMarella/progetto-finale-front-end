<template>
    <div class="container w-75 border rounded">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center py-3">Create your account</h1>
            </div>

            <div class="col-12">
                <form>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <input type="text" class="form-control" id="username" placeholder="Name">
                            </div>
                        </div>
    
                        <div class="col-6">
                            <div class="form-group">
                                <input type="text" class="form-control" id="lastName" placeholder="Last name">
                            </div>
                        </div>
                    </div>

                    <div class="form-group my-3">
                        <input type="text" class="form-control" id="address" placeholder="Address">
                    </div>

                    <div class="form-group my-3">
                        <input type="email" class="form-control" id="username" placeholder="Email">
                    </div>

                    <div class="form-group my-3">
                        <input type="password" class="form-control" id="password" placeholder="Password">
                    </div>

                    <div class="d-flex button justify-content-center my-3">
                        <button type="submit" class="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register',
}
</script>

<style lang="scss" scoped>

</style>