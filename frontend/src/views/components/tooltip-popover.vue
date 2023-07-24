<template>
  <div class="grid xl:grid-cols-2 grid-cols-1 gap-5">
    <Card title="Tooltip Position">
      <p class="dark:text-slate-300 text-slate-600 text-base mb-4">
        available options for positioning:
        <code
          class="font-Inter p-1 rounded bg-[#E0EAFF] dark:bg-slate-700 text-slate-900 dark:text-slate-300 text-sm"
        >
          top, top-start, top-end, bottom, bottom-start, bottom-end, left,
          left-start, left-end, right, right-start, right-end
        </code>
      </p>
      <div class="tooltipGroup">
        <Tooltip
          title="Tooltip on top"
          content="Tooltip on top!"
          placement="top"
          btnClass="btn-outline-dark "
          arrow
        />
        <Tooltip
          title="Tooltip on Right"
          content="Tooltip on Right!"
          placement="right"
          btnClass="btn-outline-dark"
          arrow
        />
        <Tooltip
          title="Tooltip on Left"
          content="Tooltip on Left!"
          placement="left"
          btnClass="btn-outline-dark"
          arrow
        />
        <Tooltip
          title="Tooltip on bottom"
          content="Tooltip on bottom!"
          placement="bottom"
          btnClass="btn-outline-dark"
          arrow
        />
      </div>
    </Card>
    <Card title="Theme style">
      <div class="tooltipGroup">
        <Tooltip
          title="primary"
          content="primary style"
          placement="top"
          btnClass="btn-outline-primary "
          arrow
          theme="primary-500"
        />
        <Tooltip
          title="secondary"
          content="secondary style"
          placement="top"
          btnClass="btn-outline-secondary "
          arrow
          theme="secondary-500"
        />
        <Tooltip
          title="success"
          content="success style"
          placement="top"
          btnClass="btn-outline-success"
          arrow
          theme="success-500"
        />
        <Tooltip
          title="info"
          content="info style"
          placement="top"
          btnClass="btn-outline-info "
          arrow
          theme="info-500"
        />
        <Tooltip
          title="warning"
          content="warning style"
          placement="top"
          btnClass="btn-outline-warning "
          arrow
          theme="warning-500"
        />
        <Tooltip
          title="danger"
          content="danger style"
          placement="top"
          btnClass="btn-outline-danger "
          arrow
          theme="danger-500"
        />
        <Tooltip
          title="dark"
          content="Dark style"
          placement="top"
          btnClass="btn-outline-dark "
          arrow
          theme="dark"
        />
        <Tooltip
          title="light"
          content="Light style"
          placement="top"
          btnClass="btn-outline-light "
          arrow
          theme="light"
        />
      </div>
    </Card>
    <Card title="Animations">
      <p class="dark:text-slate-300 text-slate-600 text-base mb-4">
        available Animations:
        <code
          class="font-Inter p-1 rounded bg-[#E0EAFF] dark:bg-slate-700 text-slate-900 dark:text-slate-300 text-sm"
        >
          scale, scale-subtl, scale-extreme, perspective-extrem,
          perspective-subtle, perspective, shift-away-extreme shift-away-subtle,
          shift-away.css, shift-toward-extreme,shift-toward-subtle,
          shift-toward.
        </code>
      </p>
      <div class="tooltipGroup">
        <Tooltip
          title="Shift-away"
          content="Shift-away"
          placement="top"
          btnClass="btn-outline-dark "
          arrow
          animation="shift-away"
        />
        <Tooltip
          title="Shift-toward"
          content="Shift-toward"
          placement="top"
          btnClass="btn-outline-dark "
          arrow
          animation="shift-toward"
        />
        <Tooltip
          title="Scale"
          content="Scale"
          placement="top"
          btnClass="btn-outline-dark "
          arrow
          animation="scale"
        />
        <Tooltip
          title="Fade"
          content="Fade"
          placement="top"
          btnClass="btn-outline-dark "
          arrow
          animation="fade"
        />
        <Tooltip
          title="Perspective"
          content="Perspective"
          placement="top"
          btnClass="btn-outline-dark "
          arrow
          animation="Perspective"
        />
      </div>
    </Card>
    <Card title="Triggers">
      <div class="tooltipGroup">
        <Tooltip
          title="Mouseenter"
          content="Mouseenter"
          placement="top"
          btnClass="btn-outline-dark "
          arrow
          trigger="mouseenter"
        />
        <Tooltip
          title="Click"
          content="Click"
          placement="top"
          btnClass="btn-outline-dark "
          arrow
          trigger="click"
        />
      </div>
    </Card>

    <div class="xl:col-span-2">
      <Card title="Popover Positions">
        <div class="tooltipGroup">
          <Tooltip
            title="Popover Top"
            placement="top"
            btnClass="btn-outline-dark"
            arrow
            allowHTML
            interactive
            theme="custom-light"
            maxWidth="320px"
          >
            <div class="dark:text-slate-300 text-slate-600 text-sm">
              <h1
                class="text-base bg-slate-900 dark:bg-slate-600 dark:bg-opacity-70 text-white rounded-t px-[9px] mt-[-5px] mx-[-9px] mb-3 py-2"
              >
                Popover Top
              </h1>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              reprehenderit doloremque mollitia esse eveniet dolor. Eos quasi
              amet, assumenda omnis aliquid cum tenetur ratione tempore
              similique, itaque maiores et vel.
            </div>
          </Tooltip>
          <Tooltip
            title="Popover bottom"
            placement="bottom"
            btnClass="btn-outline-dark"
            arrow
            allowHTML
            interactive
            theme="custom-light"
            maxWidth="320px"
          >
            <div class="dark:text-slate-300 text-slate-600 text-sm">
              <h1
                class="text-base bg-slate-900 dark:bg-slate-600 dark:bg-opacity-70 text-white rounded-t px-[9px] mt-[-5px] mx-[-9px] mb-3 py-2"
              >
                Popover Bottom
              </h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              reprehenderit doloremque mollitia esse eveniet dolor. Eos quasi
              amet, assumenda omnis aliquid cum tenetur ratione tempore
              similique, itaque maiores et vel.
            </div>
          </Tooltip>
          <Tooltip
            title="Popover left"
            placement="left"
            btnClass="btn-outline-dark"
            arrow
            allowHTML
            interactive
            theme="custom-light"
            maxWidth="320px"
          >
            <div class="dark:text-slate-300 text-slate-600 text-sm">
              <h1
                class="text-base bg-slate-900 dark:bg-slate-600 dark:bg-opacity-70 text-white rounded-t px-[9px] mt-[-5px] mx-[-9px] mb-3 py-2"
              >
                Popover Left
              </h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              reprehenderit doloremque mollitia esse eveniet dolor. Eos quasi
              amet, assumenda omnis aliquid cum tenetur ratione tempore
              similique, itaque maiores et vel.
            </div>
          </Tooltip>
          <Tooltip
            title="Popover right"
            placement="right"
            btnClass="btn-outline-dark"
            arrow
            allowHTML
            interactive
            theme="custom-light"
            maxWidth="320px"
          >
            <div class="dark:text-slate-300 text-slate-600 text-sm">
              <h1
                class="text-base bg-slate-900 dark:bg-slate-600 dark:bg-opacity-70 text-white rounded-t px-[9px] mt-[-5px] mx-[-9px] mb-3 py-2"
              >
                Popover Right
              </h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              reprehenderit doloremque mollitia esse eveniet dolor. Eos quasi
              amet, assumenda omnis aliquid cum tenetur ratione tempore
              similique, itaque maiores et vel.
            </div>
          </Tooltip>
        </div>
      </Card>
    </div>
    <Card title="Interactive">
      <div class="tooltipGroup">
        <Tooltip
          title="Interactive"
          content="Interactive tooltip"
          placement="top"
          btnClass="btn-outline-dark "
          arrow
          interactive
        />
      </div>
    </Card>
  </div>
</template>
<script>
import Tooltip from '@/components/Tooltip';
import Card from '@/components/Card';
export default {
  components: {
    Tooltip,
    Card,
  },
};
</script>
<style lang="scss">
.tooltipGroup {
  @apply flex flex-wrap;
  .btn {
    @apply mr-3 mb-3;
  }
}
</style>
