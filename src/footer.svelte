<script>
    let currentYear = new Date().getFullYear();
</script>

<div class="container footer card">
    <div class="col-xs-6 text-left">
        <h6>Made with <span class="glyphicon glyphicon-heart"></span> in Ypsilanti</h6>
        <h6>Thanks to GitHub for hosting!</h6>
        <h6><a href="https://github.com/kszalai/kszalai-website_react">Want to see how I'm made?</a></h6>
    </div>
    <div class="col-xs-6 text-right">
        <h6> 
            Last changed: {document.lastModified}
            <br />
            &copy; Kyle Szalai {currentYear}
        </h6>
    </div>
</div>