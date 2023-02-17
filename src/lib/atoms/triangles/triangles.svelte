<script>
  import Triangles from '$lib/images/triangles.svg';
</script>


<img src={Triangles} alt="" aria-hidden="true">


<style>
@media only screen and (max-width:924px) {
  img {
    display: none;
  }
}


img {
  opacity: 0.8;
  transform-origin: center center;
  animation: rotateTria 4s infinite alternate;
  animation-timing-function: cubic-bezier(0, 0.07, 0.3, 1.82);
}


@keyframes rotateTria {
  0% {
    rotate: 0;
    scale: 1.2;
  }

  100% {
    rotate: 360deg;
    scale: 0.5;
  }
}

</style>
