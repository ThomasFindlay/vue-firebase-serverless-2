<script>
export default {
  functional: true,
  props: {
    log: ''
  },
  render(h, ctx) {
    console.log(`%c LOG: `, 'background: #222; color: #bada55', ctx.props.log);
  }
};
</script>
<style lang="scss" scoped>
</style>
